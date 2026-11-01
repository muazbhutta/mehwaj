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
| `public/images/office.jpg`      | The home hero shows this photo in place of the one it falls back to. Use a real photo of the team, the office or a set of working papers. Landscape, about 1400 by 930. |
| `public/firm-profile.pdf`       | The "Download firm profile" button appears in the secondments hero. |

The hero picks its image in this order: `office.jpg` if it is there, then
`team.jpg`, which is the photo the earlier site used, and only then the
espresso brand panel. So dropping a real office photo in replaces the stock one
with no code change.

### Team photos

`lib/site.ts` holds a `PEOPLE` array. A person without an `image` shows their
initials on a beige circle. To add a photo, drop the file into `public/images`
and set `image: "/images/<file>"` on that person.

Use a **square headshot, about 600 by 600, framed head and shoulders**. The
avatar is a circle, so a full length portrait crops to the middle of the body
and the face comes out tiny. `mehar-fatima.png` is such a crop, taken from the
full length `leader-mehar.png`, which is kept for other uses.

---

## Motion

The site moves, but quietly: sections fade and rise as they come into view,
cards lift a few pixels under the pointer, the arrow on a button drifts away
from its label, the header picks up a shadow once the page scrolls, and the FAQ
answers slide rather than jump.

Three rules keep it maintainable:

- Everything is CSS, driven by the classes in `globals.css`. The only
  JavaScript is `Reveal`, which adds `is-visible`, and the two small scroll
  listeners in `Header` and `WhatsAppButton`.
- Nothing is hidden by motion. The hidden state only arms once the inline
  script sets `js-reveal` on `<html>`, so without JavaScript the page is simply
  static and complete.
- `prefers-reduced-motion` is honoured by one blanket rule in `globals.css`,
  so a new animation is covered without extra work.

Useful classes: `.reveal` (fade and rise on scroll), `.stagger` on a parent
inside a `.reveal` so its children arrive one after another, `.card-lift` for a
card that answers to the pointer, and `.nav-link` for the growing gold
underline.

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
