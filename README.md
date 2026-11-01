# M.W. & Co., Chartered Accountants

Marketing website for **M.W. & Co., Chartered Accountants** (ICAP Certificate of
Practice No. 002196), Multan, Pakistan.

The site serves two audiences: businesses in Pakistan that need audit, tax,
accounting and advisory work, and accounting firms and companies across the GCC
that need audit and finance professionals on secondment.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.
Everything is statically generated; there is no backend and no database.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3100
```

| Script             | What it does                                           |
| ------------------ | ------------------------------------------------------ |
| `npm run dev`      | Dev server on port 3100                                 |
| `npm run build`    | Production build                                        |
| `npm run start`    | Serve the production build                              |
| `npm run lint`     | ESLint through `next lint`                              |
| `npm run check:copy` | House style check, see **Copy rules** below           |
| `npm run gen:favicons` | Regenerate the favicon set from the logo            |
| `npm run gen:countries` | Rebuild `lib/countries.ts` from the Intl data      |

The folder name contains an ampersand, which breaks the plain `next` binary
resolution on Windows, so every script calls node against
`node_modules/next/dist/bin/next` directly. Keep that form if you add scripts.

---

## Pages

Every page exists in English at its normal URL and in Arabic under `/ar`.

| English                              | Arabic                                  |
| ------------------------------------ | --------------------------------------- |
| `/`                                  | `/ar`                                   |
| `/services`                          | `/ar/services`                          |
| `/services/<slug>` (14 pages)        | `/ar/services/<slug>`                   |
| `/secondments`                       | `/ar/secondments`                       |
| `/about`                             | `/ar/about`                             |
| `/insights`                          | `/ar/insights`                          |
| `/insights/<slug>` (7 articles)      | `/ar/insights/<slug>`                   |
| `/contact`                           | `/ar/contact`                           |
| `/chartered-accountant-<city>` (4)   | `/ar/chartered-accountant-<city>`       |
| `/privacy`, `/terms`, `/disclaimer`  | `/ar/privacy`, `/ar/terms`, `/ar/disclaimer` |

`/blog` and `/blog/:slug` redirect permanently to `/insights` and
`/insights/:slug` (see `next.config.mjs`).

---

## Project structure

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
  i18n/
    types.ts         The shape both dictionaries must satisfy
    en/  ar/         All visible copy, split by page
scripts/
  check-copy.mjs     House style check
```

There are **two root layouts**, one per language, so each sets its own `lang`
and `dir` on `<html>`. Because of that there is no `app/layout.tsx`, and each
route group carries its own `not-found.tsx` plus a `[...notfound]` catch all so
an unknown URL still shows the header, the footer and the language switch.

---

## Editing copy

**All visible text lives in `lib/i18n/en/*` and `lib/i18n/ar/*`.** Components
never hold copy; they take `locale` and read from the dictionary. Both
dictionaries satisfy the `Dictionary` type in `lib/i18n/types.ts`, so a string
added to one language has to be added to the other or the build fails.

Firm facts (phone numbers, address, ICAP number, service slugs, article slugs,
the people list) live in `lib/site.ts` and are shared by both languages.

Inside an article or a biography, `**text**` renders bold. Nothing else is
interpreted.

### Countries

The country pickers on the contact and secondment forms offer every country,
in English and in Arabic. The list is generated, not hand written: run
`npm run gen:countries` to rebuild `lib/countries.ts` from the Intl data that
ships with Node. Two things in that script are worth knowing:

- `AR_OVERRIDES` and `EN_OVERRIDES` keep a few names in line with the firm
  glossary, for example Oman and the British Virgin Islands.
- The script refuses to write a name containing a dash, so the generated file
  always satisfies `check:copy`.

Which countries sit in the short group at the top is a copy decision, set by
`priorityCountryCodes` in each dictionary. The secondments form overrides it
with `GCC_CODES` from `lib/site.ts`, so that form always leads with the Gulf.

### Copy rules

`npm run check:copy` scans `app/`, `components/` and `lib/` and fails on:

- the em dash and the en dash
- a spaced hyphen used as a dash (`" - "`)
- `MW & Co` written without the dots (it is always **M.W. & Co.**)
- the words `premier` and `ICAP-approved`

Number ranges are written with "to": "3 to 5 working days". Ordinary hyphenated
words (`agreed-upon`, `month-end`, `part-time`, `SOCPA-licensed`) are fine. The
same rules apply to the Arabic copy, which uses the Arabic comma `،`.

Run it before every commit; it is also worth running after a content paste from
a word processor, which is where curly dashes usually come from.

---

## Files to drop in

Some blocks only appear once the client supplies a file. Nothing breaks while
the file is missing.

| File                            | What it turns on                                              |
| ------------------------------- | ------------------------------------------------------------- |
| `public/images/office.jpg`      | The home hero shows this photo instead of the brand panel. Use a real photo of the team, the office or a set of working papers, not a stock image. Landscape, about 1200 by 900. |
| `public/firm-profile.pdf`       | The "Download firm profile" button appears in the secondments hero. |

### Team photos

`lib/site.ts` holds a `PEOPLE` array. A person without an `image` shows their
initials on a beige circle. To add a photo, drop the file into `public/images`
and set `image: "/images/<file>"` on that person. Square images, about 600 by
600, work best.

---

## SEO

- Each page sets its own title, description, canonical and
  `alternates.languages` (`en`, `ar`, `x-default`) through
  `pageMetadata(locale, path, meta)` in `lib/metadata.ts`.
- `lib/schema.ts` emits the JSON-LD: an Organization plus AccountingService
  graph site wide, then BreadcrumbList, Service, FAQPage, BlogPosting and a per
  city AccountingService where they apply.
- The firm has **one** address, in Multan. City pages describe how each city is
  served from it; they must never claim a local office.
- `app/sitemap.ts` lists every English and Arabic URL with its alternates.
- The Open Graph image is `public/images/og-image.jpg` at 900 by 1600.

## Factual guardrails

- Secondment **experience** is only Saudi Arabia, the United Arab Emirates,
  Qatar and the British Virgin Islands. Never list Kuwait, Bahrain or Oman as
  places the team has worked.
- The firm **serves** accounting firms and companies across the whole GCC, so
  those six countries do belong in the country dropdowns and in "who we serve".
- No invented statistics, no superlatives, no claim of ICAP approval beyond the
  Certificate of Practice.
