# M.W. & Co. website: the whole record

One file covering the repository, what was built, how it is put together,
every commit that got it here, and what is still open.

Last updated after commit `ada70d0`, 3 November 2026.

---

## 1. The repository

| | |
| --- | --- |
| **Remote** | https://github.com/muazbhutta/mehwaj.git |
| **Default branch** | `main` |
| **Other branch** | `rebuild/bilingual-site` (merged into `main` at `705dce0`, kept for history) |
| **Local path** | `D:\Websites\mw&co` |
| **Commits** | 31, from `e2b4467` (28 July 2026) to `ada70d0` (3 November 2026) |
| **Tracked files** | 145, of which 100 are TypeScript or TSX and 23 live under `public/` |
| **Live site** | https://www.mehwaj.pk |
| **Hosting** | Vercel, deploying `main` automatically on every push |

```bash
git clone https://github.com/muazbhutta/mehwaj.git
```

The folder name contains an ampersand, which breaks the plain `next` binary
resolution on Windows. Every npm script therefore calls node against
`node_modules/next/dist/bin/next` directly. Keep that form if you add scripts.

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3100 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint through `next lint` |
| `npm run check:copy` | House style check, see section 8 |
| `npm run audit <base>` | Crawls all 68 pages and checks them, see section 8 |
| `npm run gen:logo` | Rebuilds every logo and icon from `MW-Logo.png` |
| `npm run gen:countries` | Rebuilds `lib/countries.ts` from the Intl data |

The order to run before every commit:

```bash
npm run check:copy && npm run lint && npm run build
```

---

## 2. What the site is

The marketing website for **M.W. & Co., Chartered Accountants**, ICAP
Certificate of Practice No. 002196, Multan, Pakistan.

It serves two audiences:

- **Pakistan.** Businesses that need audit, tax, accounting and advisory work.
- **The Gulf and beyond.** Accounting firms and companies that need qualified
  audit and finance professionals on secondment, on site or remotely.

Everything exists in English and in Arabic. There is no backend, no database
and no form handler: the two forms compose an email or a WhatsApp message and
hand it to the visitor's own client.

---

## 3. The stack

- **Next.js 14.2.15**, App Router, everything statically generated
- **React 18.3.1**, **TypeScript 5.6**
- **Tailwind CSS 3.4** with the brand tokens in `tailwind.config.js`
- **sharp** and **png-to-ico** at build time only, for the logo pipeline
- No runtime dependencies beyond Next, React and React DOM

### Brand tokens

| Token | Hex | Used for |
| --- | --- | --- |
| `espresso` | `#2B1B10` | Dark bands, footer, panels |
| `coffee` | `#4A2E1C` | Cards sitting on espresso |
| `gold` | `#C79A4B` | Accent, rules, the diamond |
| `champagne` | `#E5C87E` | Figures and highlights on dark |
| `bronze` | `#A87B33` | Eyebrows, borders, the code circles |
| `cream` | `#F7F3EA` | Light backgrounds, and all text on brown |
| `ivory` | `#F1E7DA` | Icon discs, alternate sections |
| `offwhite` | `#FDFBF7` | Card surfaces |

**Text on a brown background is always cream, never plain white.** White cuts
against the espresso instead of sitting on it. The only two exceptions are the
gold button and the WhatsApp button, neither of which sits on brown.

---

## 4. Project structure

```
app/
  (en)/              English root layout: <html lang="en" dir="ltr">
  (ar)/ar/           Arabic root layout:  <html lang="ar" dir="rtl">
  fonts.ts           Playfair, Inter, Great Vibes, IBM Plex Sans Arabic
  globals.css        Brand component classes (.card, .btn-gold, .dot-pattern)
  manifest.ts robots.ts sitemap.ts
components/
  Header, Footer, Logo, Icons, Reveal, SiteShell, WhatsAppButton
  home/ services/ secondments/ about/ insights/ contact/ cities/ legal/
  forms/             Contact and secondment request forms (client components)
  ui/                Breadcrumb, PageBand, StepsBand, Avatar, RichText
lib/
  site.ts            Firm facts, slugs, groupings. One source of truth.
  metadata.ts        Title, description, canonical and hreflang per page
  schema.ts          JSON-LD: Organization, Service, Breadcrumb, FAQ, Article
  assets.ts          Build time checks for optional files in /public
  countries.ts       Generated: every country in English and Arabic
  i18n/
    types.ts         The shape both dictionaries must satisfy
    en/  ar/         All visible copy, split by page
scripts/
  check-copy.mjs     House style check
  audit-site.mjs     68 page crawler
  generate-logo-assets.mjs
  generate-countries.mjs
```

There are **two root layouts**, one per language, so each sets its own `lang`
and `dir` on `<html>`. Because of that there is no `app/layout.tsx`, and each
route group carries its own `not-found.tsx` plus a `[...notfound]` catch all
so an unknown URL still shows the header, the footer and the language switch.

---

## 5. The pages: 68 URLs

34 English, each with an Arabic twin under `/ar`. They point at each other
through hreflang, so Google treats the pair as one page in two languages.

| Group | Count | Paths |
| --- | --- | --- |
| Core | 6 × 2 | `/`, `/services`, `/secondments`, `/about`, `/insights`, `/contact` |
| Services | 14 × 2 | `/services/<slug>` |
| Cities | 4 × 2 | `/chartered-accountant-<city>` |
| Articles | 7 × 2 | `/insights/<slug>` |
| Legal | 3 × 2 | `/privacy`, `/terms`, `/disclaimer` |

**Service slugs**, grouped as they are in `lib/site.ts`:

- *Assurance:* `external-audit`, `review-engagements`, `agreed-upon-procedures`
- *Tax and zakat:* `income-tax`, `sales-tax`, `tax-notices`, `zakat-vat-saudi`
- *Advisory:* `internal-audit`, `ifrs-advisory`, `financial-modelling`,
  `business-valuation`, `secp-compliance`
- *Accounting:* `bookkeeping`, `financial-statements`

**Cities:** `multan`, `lahore`, `karachi`, `islamabad`. The firm has one
office, in Multan. The city pages describe how each city is served from it and
must never claim a local office.

**Articles:** `ifrs-18-replaces-ias-1-pakistan`,
`outsourcing-month-end-close-gulf`,
`private-limited-company-compliance-calendar-pakistan`,
`zakat-vat-returns-saudi-arabia-calendar`,
`how-to-file-income-tax-return-pakistan-2026`,
`external-vs-internal-audit-difference`,
`what-is-ifrs-and-why-your-business-needs-it`.

`/blog` and `/blog/:slug` redirect permanently to `/insights`, in both
languages. See `next.config.mjs`.

The full submission plan, with the market each URL is written for and the
order to request indexing in, is in **`INDEXING.md`**.

---

## 6. The people

`lib/site.ts` holds a `PEOPLE` array; the names, titles and biographies live
in the dictionaries so they exist in both languages.

| Slug | Initials | Photo |
| --- | --- | --- |
| `syed-muhammad-wajahat` | MW | `/images/partner-portrait.png` |
| `syeda-mehar-fatima` | MF | `/images/mehar-fatima.png` |
| `anas-farooq-maniya` | AF | `/images/anas-farooq-v3.png` |
| `hamza-amir` | HA | `/images/hamza-amir.png` |

A person without an `image` shows their initials on a beige circle. Use a
**square headshot, about 600 by 600, framed head and shoulders**: the avatar is
a circle, so a full length portrait crops to the middle of the body.

**Replacing a photo: give the new file a new name.** Files in `/public` are not
content hashed, so overwriting `foo.png` leaves anyone who has already seen it
looking at the old one until their cache expires. Add `foo-v2.png` and point
`image` at it, the way `anas-farooq-v3.png` does.

---

## 7. Editing content

**All visible text lives in `lib/i18n/en/*` and `lib/i18n/ar/*`.** Components
never hold copy; they take `locale` and read from the dictionary. Both
dictionaries satisfy the `Dictionary` type in `lib/i18n/types.ts`, so a string
added to one language has to be added to the other or the build fails. That
type is the contract, and it is what keeps the two languages from drifting.

Firm facts (phone numbers, address, ICAP number, service slugs, article slugs,
the people list) live in `lib/site.ts` and are shared by both languages.

Inside an article or a biography, `**text**` renders bold. Nothing else is
interpreted.

### Arabic

- Arabic is a **joined script**, so `letter-spacing` breaks it. Tracking is
  switched off under `html[lang="ar"]` for every label class, except inside a
  `[dir="ltr"]` island.
- Latin runs inside Arabic text (phone numbers, the firm name, email) are
  wrapped in `<bdi dir="ltr">` so they do not reverse.
- Layout uses logical properties (`ms-`, `start-`, `rtl:rotate-180`), so the
  same components mirror without a second set of styles.
- Arabic headings get a looser `line-height`, because the script sits taller.

### Generated files, do not hand edit

- **`lib/countries.ts`** comes from `npm run gen:countries`, built from the
  Intl data that ships with Node. `AR_OVERRIDES` and `EN_OVERRIDES` keep a few
  names in line with the firm glossary, and the script refuses to write a name
  containing a dash so the output always passes `check:copy`.
- **Every logo and icon** comes from `npm run gen:logo`, built from
  `MW-Logo.png` at the repository root. Replace that one file and rerun.

Two things about the logo script are worth knowing. The monogram is white and
its strokes run out past the brown disc into the white around it, so the
letterform and the background are one connected region and no amount of keying
will separate them; the artwork is therefore cut to a circle and used as a
badge, which is invisible on the white header and reads as a medallion on the
espresso footer. And every favicon size is that same badge, so the browser tab
shows the same mark as the header and the footer.

Every icon is declared once, in `lib/metadata.ts`, and served from `/public`.
There are deliberately no icon files under `app/`, which would add a second,
unversioned set of links. The `?v=` on those URLs is what gets a changed
favicon past browsers, which cache them hard.

---

## 8. The two checks

### `npm run check:copy`

Scans `app/`, `components/` and `lib/` and fails on:

- the em dash and the en dash
- a spaced hyphen used as a dash (`" - "`)
- `MW & Co` written without the dots (it is always **M.W. & Co.**)
- the words `premier` and `ICAP-approved`

It reads only string literals and JSX text, so `length - 1` in code is fine.
Number ranges are written with "to": "3 to 5 working days". Ordinary
hyphenated words (`agreed-upon`, `month-end`, `part-time`) are fine. The same
rules apply to the Arabic copy, which uses the Arabic comma `،`.

### `npm run audit <base>`

Crawls all 68 URLs against a running server and checks, per page: HTTP status,
exactly one H1, a unique title of 60 characters or fewer, a unique description
of 160 or fewer, the canonical, three hreflang entries, `lang` and `dir` on
`<html>`, alt text on every image, that the JSON-LD parses, the Open Graph
tags, and that no placeholder text leaked. It then follows every internal link
and checks `sitemap.xml`, `robots.txt`, `llms.txt` and the manifest.

```bash
npm run build
npm run start -- -p 3101     # or node node_modules/next/dist/bin/next start -p 3101
npm run audit http://localhost:3101
```

Kill any stale server on that port first, or the audit will test an old build.

---

## 9. SEO

- Each page sets its own title, description, canonical and
  `alternates.languages` (`en`, `ar`, `x-default`) through
  `pageMetadata(locale, path, meta)` in `lib/metadata.ts`.
- `lib/schema.ts` emits the JSON-LD: an Organization plus AccountingService
  graph site wide, then BreadcrumbList, Service, FAQPage, BlogPosting and a per
  city AccountingService where they apply.
- `app/sitemap.ts` lists every English and Arabic URL with its alternates.
- `public/llms.txt` describes the firm for assistants that read it.
- The Open Graph image is `public/images/og-image.jpg`.
- Bing Webmaster Tools matters as much as Search Console here, because it is
  what ChatGPT search reads.

---

## 10. Motion

The site moves, but quietly: sections fade and rise as they come into view,
cards lift a few pixels under the pointer, the arrow on a button drifts away
from its label, the header picks up a shadow once the page scrolls, and the FAQ
answers slide rather than jump.

Three rules keep it maintainable:

- Everything is CSS, driven by the classes in `globals.css`. The only
  JavaScript is `Reveal`, which adds `is-visible`, and the two small scroll
  listeners in `Header` and `WhatsAppButton`.
- Nothing is hidden by motion. The hidden state only arms once an inline script
  sets `js-reveal` on `<html>`, so without JavaScript the page is simply static
  and complete. A safety timer un-hides anything the observer misses.
- `prefers-reduced-motion` is honoured by one blanket rule, so a new animation
  is covered without extra work.

Useful classes: `.reveal`, `.stagger` on a parent inside a `.reveal`,
`.card-lift`, `.nav-link`.

---

## 11. Factual guardrails

These are not style preferences. Breaking one puts a false claim on a
chartered accountant's website.

- Secondment **experience** is only Saudi Arabia, the United Arab Emirates,
  Qatar and the British Virgin Islands. Never list Kuwait, Bahrain or Oman as
  places the team has worked.
- The firm **serves** accounting firms and companies across the whole GCC, so
  those six countries do belong in the country dropdowns and in "who we serve".
- The firm has **one** office, in Multan.
- No invented statistics, no superlatives, and no claim of ICAP approval beyond
  the Certificate of Practice.
- The figures on the secondments page (100+, 50+, 30+, 500+) count clients
  served by M.W. & Co. professionals, **including roles held before the firm
  was established**. The footnote saying so was removed at the client's
  request; the numbers now stand without that context.

---

## 12. Every commit

### Before the rebuild: the first site

| Commit | Date | What it did |
| --- | --- | --- |
| `e2b4467` | 28 Jul 2026 | first commit |
| `43683ec` | 30 Jul 2026 | Important-changing |
| `430b461` | 31 Jul 2026 | Finalize MW & Co. site: leadership, city updates, contact and polish |
| `2d8bccb` | 3 Aug 2026 | Update the Repo |
| `ccf6c0e` | 3 Aug 2026 | Update the File |
| `38f2a4a` | 5 Aug 2026 | Update README.md |

### The bilingual rebuild, on `rebuild/bilingual-site`

| Commit | Date | What it did |
| --- | --- | --- |
| `c2856e0` | 1 Nov 2026 | Rebuild the site bilingually on the new M.W. & Co. design |
| `15234b0` | 1 Nov 2026 | Offer every country in the forms, behind a searchable picker |
| `1811a4d` | 1 Nov 2026 | Put every select on the brand dropdown and hide its scrollbar |
| `9e022d4` | 1 Nov 2026 | Show the practice manager photo and bring the hero photo back |
| `fdf1531` | 1 Nov 2026 | Add the head of audit photo and give the site some quiet motion |
| `3e5554e` | 1 Nov 2026 | Type the country straight into the field, and drop the breadcrumbs |
| `3cecbe7` | 1 Nov 2026 | Widen the SEO to the whole GCC, and add an audit that proves it |
| `705dce0` | 1 Nov 2026 | **Merge the bilingual rebuild into main** |

The rebuild itself is the bulk of the work: measured against the last commit of
the old site, it is **159 files changed, 10,690 insertions, 3,422 deletions**.

### After going live

| Commit | Date | What it did |
| --- | --- | --- |
| `880ab33` | 1 Nov 2026 | Replace the head of audit photo, and stop images sticking in caches |
| `3e1b583` | 3 Nov 2026 | Name the tax manager: Hamza Amir, with his photo and his work |
| `e86e86b` | 3 Nov 2026 | Drop the phone number from the tax manager profile |
| `cfd245e` | 3 Nov 2026 | Rebuild every logo and icon from the supplied artwork |
| `37e3316` | 3 Nov 2026 | Senior Consultant, fuller assurance copy, and no reply time promise |
| `8a1a4e6` | 3 Nov 2026 | Add Clients served from the firm profile, and lift the labels off the brown |
| `88f96e4` | 3 Nov 2026 | Let the supplied audit wording replace the old line, not sit under it |
| `1927a34` | 3 Nov 2026 | Stop letter spacing breaking the Arabic, and name the UAE |
| `dfa8a3d` | 3 Nov 2026 | Rework the favicon, white out the last gold on brown, and reword the reach |
| `75e126c` | 3 Nov 2026 | Warm the labels on brown from white to cream |
| `1f4c587` | 3 Nov 2026 | Revert "Warm the labels on brown from white to cream" |
| `449c311` | 3 Nov 2026 | Add the indexing plan for all 68 URLs |
| `3cc4503` | 3 Nov 2026 | Put the real team photo in the hero, and make the favicon the logo |
| `c190f78` | 3 Nov 2026 | Lay the secondments sections out the way the firm profile does |
| `a89eab1` | 3 Nov 2026 | Warm every label on brown from white to cream |
| `8384964` | 3 Nov 2026 | Deepen the jurisdiction circles so the cream on them reads |
| `ada70d0` | 3 Nov 2026 | Give the home page the same jurisdiction circles |

`75e126c` and `1f4c587` cancel out; `a89eab1` re-applies the same change after
the client asked for it a second time, and extends it to the two espresso
panels added in `c190f78`. The history is left as it happened rather than
rewritten.

---

## 13. What the last day of work changed

Three things the client asked for in a row, all on the secondments page and the
home page.

**The firm profile layout.** The "Clients served" figures and the four
jurisdictions had been built as plain white cards on a light background, which
is not how the printed firm profile sets them. Both now sit inside their own
espresso panel with gold-bordered cards, and fourteen new line icons were added
to `components/Icons.tsx` for the eight Saudi sectors, the two offshore lists
and the three Pakistan figures. The icons are a design decision rather than
copy, so the component matches them to the dictionary **by position** instead
of repeating them in both languages.

**Cream in place of white.** Every label on a brown background moved from plain
white to cream: the eyebrows, the footer headings, the insight tags, the roles
table header, the step numbers, the ICAP highlight, the 404 numeral and the new
panel labels.

**The jurisdiction circles.** KSA, UAE, QA and BVI took the same cream, which
left them too faint on the bright gold, so the disc went down a shade to
bronze. The home page carries the same four badges in a different component
(`components/home/SecondmentBand.tsx`) and was brought into line.

---

## 14. Open items

Flagged to the client, not yet acted on.

1. **The four city pages have no internal links.** The "Clients we serve in
   Pakistan" block that linked to them was removed at the client's request, so
   they are now reachable only through the sitemap. Adding them to the footer
   would fix it in one small change.
2. **The secondment figures have lost their footnote.** The line explaining
   that the numbers include roles held before the firm was established was
   removed. The numbers are accurate; the context is gone.
3. **No per-country GCC landing pages.** One secondments page names all six
   states. To rank for "audit secondment Dubai" or "outsourced accounting
   Qatar" specifically, a page per country is the next real step, the same way
   the four Pakistani cities each have one.
4. **Trust signals are thin.** No testimonials, no client logos, no Google
   Business Profile. The thing that moves indexing fastest is not resubmitting
   the sitemap; it is other sites linking to this one.
5. **`firm-profile.pdf` is not in `/public`.** Drop it there and the "Download
   firm profile" button appears in the secondments hero on its own.

---

## 15. The other documents in this repository

| File | What it holds |
| --- | --- |
| `README.md` | The working guide: scripts, structure, how to edit copy, the logo and country pipelines, the copy rules, SEO and the factual guardrails |
| `INDEXING.md` | All 68 URLs grouped by purpose, the market each is written for, and a three tier order for requesting indexing |
| `MW-Co-SEO-Strategy.md` | The SEO plan the rebuild was written against |
| `MW-Co-Website-Prompt.md` | The original brief for the rebuild |
| `PROJECT-LOG.md` | This file |
