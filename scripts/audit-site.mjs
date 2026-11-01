#!/usr/bin/env node
// ============================================================================
// audit-site: crawls a running build and checks the things that quietly break
// a site, page by page.
//
//   npm run build
//   npm run start -- -p 3101
//   npm run audit -- http://localhost:3101
//
// It reports, per page: HTTP status, one H1, a unique title within 60
// characters, a unique description within 160, a canonical, the three hreflang
// alternates, the right lang and dir, alt text on every image, JSON-LD that
// parses, an Open Graph image, and no placeholder text leaking through. It
// then checks that every internal link on the site resolves.
// ============================================================================

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

const SERVICES = [
  "external-audit", "review-engagements", "agreed-upon-procedures",
  "income-tax", "sales-tax", "tax-notices", "zakat-vat-saudi",
  "internal-audit", "ifrs-advisory", "financial-modelling",
  "business-valuation", "secp-compliance", "bookkeeping",
  "financial-statements",
];
const POSTS = [
  "ifrs-18-replaces-ias-1-pakistan",
  "outsourcing-month-end-close-gulf",
  "private-limited-company-compliance-calendar-pakistan",
  "zakat-vat-returns-saudi-arabia-calendar",
  "how-to-file-income-tax-return-pakistan-2026",
  "external-vs-internal-audit-difference",
  "what-is-ifrs-and-why-your-business-needs-it",
];
const CITIES = ["multan", "lahore", "karachi", "islamabad"];
const LEGAL = ["privacy", "terms", "disclaimer"];

const PATHS = [
  "/", "/services", "/secondments", "/about", "/insights", "/contact",
  ...LEGAL.map((s) => `/${s}`),
  ...SERVICES.map((s) => `/services/${s}`),
  ...POSTS.map((s) => `/insights/${s}`),
  ...CITIES.map((c) => `/chartered-accountant-${c}`),
];
const ALL = [...PATHS, ...PATHS.map((p) => (p === "/" ? "/ar" : `/ar${p}`))];

const problems = [];
const notes = [];
const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();

const fail = (path, check, detail) =>
  problems.push({ path, check, detail });

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return m ? m[1] : null;
}

function pick(html, re) {
  const m = html.match(re);
  return m ? m[1] : null;
}

/** The whole matched tag, for patterns that capture nothing. */
function find(html, re) {
  const m = html.match(re);
  return m ? m[0] : null;
}

/** Entities inflate a character count, so decode the few that appear. */
function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

async function auditPage(path) {
  const url = `${base}${path}`;
  let res;
  try {
    res = await fetch(url);
  } catch (error) {
    fail(path, "fetch", String(error));
    return;
  }
  if (res.status !== 200) {
    fail(path, "status", `HTTP ${res.status}`);
    return;
  }

  const html = await res.text();
  const isArabic = path === "/ar" || path.startsWith("/ar/");

  // --- language and direction ---
  const htmlTag = find(html, /<html[^>]*>/i) || "";
  const lang = attr(htmlTag, "lang");
  const dir = attr(htmlTag, "dir");
  const wantLang = isArabic ? "ar" : "en";
  const wantDir = isArabic ? "rtl" : "ltr";
  if (lang !== wantLang) fail(path, "lang", `expected ${wantLang}, got ${lang}`);
  if (dir !== wantDir) fail(path, "dir", `expected ${wantDir}, got ${dir}`);

  // --- one H1 ---
  const h1s = html.match(/<h1[\s>]/gi) || [];
  if (h1s.length !== 1) fail(path, "h1", `${h1s.length} H1 elements`);

  // --- title ---
  const rawTitle = pick(html, /<title>([^<]*)<\/title>/i);
  const title = rawTitle ? decode(rawTitle) : null;
  if (!title) fail(path, "title", "missing");
  else {
    if ([...title].length > 60)
      fail(path, "title-length", `${[...title].length} chars: ${title}`);
    if (titles.has(title))
      fail(path, "title-unique", `same as ${titles.get(title)}`);
    else titles.set(title, path);
  }

  // --- description ---
  const descTag = find(html, /<meta name="description"[^>]*>/i);
  const rawDesc = descTag ? attr(descTag, "content") : null;
  const description = rawDesc ? decode(rawDesc) : null;
  if (!description) fail(path, "description", "missing");
  else {
    if ([...description].length > 160)
      fail(path, "description-length", `${[...description].length} chars`);
    if (descriptions.has(description))
      fail(path, "description-unique", `same as ${descriptions.get(description)}`);
    else descriptions.set(description, path);
  }

  // --- canonical and hreflang ---
  const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/i);
  if (!canonical) fail(path, "canonical", "missing");

  const alternates = [...html.matchAll(/<link rel="alternate"[^>]*>/gi)].map(
    (m) => m[0]
  );
  for (const want of ["en", "ar", "x-default"]) {
    if (!alternates.some((a) => attr(a, "hreflang") === want))
      fail(path, "hreflang", `missing ${want}`);
  }

  // --- Open Graph ---
  if (!/property="og:image"/i.test(html)) fail(path, "og:image", "missing");
  if (!/property="og:title"/i.test(html)) fail(path, "og:title", "missing");

  // --- images carry alt ---
  for (const img of html.match(/<img[^>]*>/gi) || []) {
    if (!/\salt="/i.test(img))
      fail(path, "img-alt", img.slice(0, 110));
  }

  // --- JSON-LD parses ---
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
    ),
  ];
  if (blocks.length === 0) fail(path, "json-ld", "no structured data");
  for (const [, body] of blocks) {
    try {
      JSON.parse(body);
    } catch (error) {
      fail(path, "json-ld", `does not parse: ${String(error).slice(0, 80)}`);
    }
  }

  // --- nothing leaking through ---
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ");
  for (const leak of ["undefined", "NaN", "[object Object]"]) {
    if (text.includes(leak)) fail(path, "leak", `"${leak}" in visible text`);
  }

  // --- collect internal links ---
  for (const a of html.match(/<a[^>]*href="[^"]*"[^>]*>/gi) || []) {
    const href = attr(a, "href");
    if (!href) continue;
    if (href.startsWith("/") && !href.startsWith("//")) {
      internalLinks.add(href.split("#")[0] || "/");
    }
  }
}

async function run() {
  console.log(`Auditing ${base} (${ALL.length} pages)\n`);
  for (const path of ALL) await auditPage(path);

  // --- every internal link resolves ---
  const checked = new Set(ALL);
  const extra = [...internalLinks].filter((l) => !checked.has(l));
  for (const link of extra) {
    try {
      const res = await fetch(`${base}${link}`);
      if (res.status !== 200) fail(link, "link", `HTTP ${res.status}`);
    } catch (error) {
      fail(link, "link", String(error));
    }
  }
  notes.push(`${internalLinks.size} distinct internal links, ${extra.length} beyond the page list`);

  // --- the files search engines look for ---
  for (const file of ["/sitemap.xml", "/robots.txt", "/llms.txt", "/manifest.webmanifest"]) {
    const res = await fetch(`${base}${file}`);
    if (res.status !== 200) fail(file, "file", `HTTP ${res.status}`);
  }

  console.log(`${titles.size} unique titles, ${descriptions.size} unique descriptions`);
  notes.forEach((n) => console.log(n));
  console.log("");

  if (problems.length === 0) {
    console.log("PASS: no problems found.");
    process.exit(0);
  }

  console.log(`FAIL: ${problems.length} problem(s)\n`);
  for (const p of problems) {
    console.log(`${p.path}  [${p.check}]  ${p.detail}`);
  }
  process.exit(1);
}

run();
