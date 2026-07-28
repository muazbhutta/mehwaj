# MW & Co., Chartered Accountants — Website

A premium, fully responsive website for **MW & Co., Chartered Accountants** — built
with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. Luxury
espresso-brown + metallic-gold brand identity, full white-hat SEO, and
deployment-ready for Vercel.

**Tagline:** _Commitment to Excellence_ · Trust. Expertise. Excellence.

---

## Tech stack

| Layer      | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 14 (App Router)                  |
| Styling    | Tailwind CSS 3 (brand tokens in config)  |
| Animation  | Framer Motion                            |
| Fonts      | Playfair Display · Inter · Great Vibes (via `next/font`) |
| Icons      | Inline SVG line-icons (no icon library)  |
| Deploy     | Vercel (zero-config)                     |

---

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Node 18.18+ (tested on Node 20).

> **Note on the folder name:** this project lives in a folder containing an
> `&` (`mw&co`). Because Windows' `npm` script runner mis-parses `&` in a path,
> the `dev`/`build`/`start`/`lint` scripts call the Next.js binary through
> `node` directly (see `package.json`) so they work regardless. For the
> smoothest tooling experience you may optionally rename the folder to
> `mw-and-co` and revert the scripts to the plain `next dev` / `next build` form.

---

## Project structure

```
app/
  layout.tsx                    # fonts, site metadata, OG, Organization JSON-LD
  page.tsx                      # single-page home (all sections) + FAQ JSON-LD
  globals.css                   # Tailwind layers + brand component classes
  manifest.ts                   # PWA / site.webmanifest
  robots.ts                     # /robots.txt
  sitemap.ts                    # /sitemap.xml
  not-found.tsx                 # branded 404
  icon.png / apple-icon.png / favicon.ico   # auto-linked by Next.js
  services/page.tsx             # services detail page
  chartered-accountant-multan/  # local SEO landing pages (one per city)
  chartered-accountant-lahore/
  chartered-accountant-karachi/
  blog/page.tsx                 # blog index
  blog/[slug]/page.tsx          # blog post (statically generated)
components/                     # Navbar, Hero, About, Services, WhyUs, Faq,
                                # Contact, Footer, WhatsAppButton, + primitives
lib/
  constants.ts                  # ← single source of truth (NAP, services, FAQ…)
  schema.ts                     # JSON-LD structured data builders
scripts/
  generate-favicons.mjs         # regenerate the favicon set from the monogram
public/
  images/                       # mw-logo.png, partner-portrait.jpg, og-image.jpg
  favicon-*.png, apple-touch-icon.png, android-chrome-*.png, favicon.ico
```

---

## Editing content

Almost everything lives in **`lib/constants.ts`** — change it once and it flows
through the UI, metadata, sitemap, and structured data:

- **Contact / NAP** — `CONTACT` (WhatsApp, phone, email, cities)
- **Services** — `SERVICES` (title, group, icon, descriptions)
- **FAQ** — `FAQS`
- **Cities** — `CITIES` (drives the local landing pages + sitemap)
- **Blog** — `BLOG_POSTS`
- **Production URL** — `SITE_URL` (used for canonical, OG, sitemap) → set this to
  your real domain before deploying.

Brand colours live in **`tailwind.config.js`** under `theme.extend.colors`
(`espresso`, `coffee`, `gold`, `champagne`, `bronze`, `cream`, `offwhite`).

### Contact form

The form composes a **pre-filled WhatsApp message** on submit (no backend
required). To wire it to email/CRM instead, edit `handleSubmit` in
`components/Contact.tsx` to `POST` to your endpoint (e.g. Formspree or a Next.js
Route Handler).

### Favicons

Regenerate the full favicon set from the MW monogram any time:

```bash
npm run gen:favicons
```

(Outputs a brown-circle + gold-ring icon in 16/32/180/192/512 + `favicon.ico`.)

---

## SEO checklist (built in)

- ✅ Unique title + meta description + canonical per page (Metadata API)
- ✅ Open Graph + Twitter cards
- ✅ Semantic HTML, one `<h1>` per page, logical heading hierarchy, alt text
- ✅ JSON-LD: `Organization`, `AccountingService`/`LocalBusiness`, `FAQPage`,
  `BreadcrumbList`, `BlogPosting`
- ✅ `sitemap.xml` + `robots.txt`
- ✅ Per-city local landing pages (`/chartered-accountant-<city>`)
- ✅ Blog structure ready for content marketing
- ✅ Modern image formats (AVIF/WebP), lazy loading, `next/font` (no render-block)

**After deploying:** set `SITE_URL`, verify the domain in **Google Search
Console**, submit the sitemap, and create a **Google Business Profile** for each
city (biggest local-SEO win). See `MW-Co-SEO-Strategy.md`.

---

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Vercel
   auto-detects Next.js. No config needed.
3. Set your custom domain and update `SITE_URL` in `lib/constants.ts`.

---

© MW & Co., Chartered Accountants. Together, we commit to excellence.
