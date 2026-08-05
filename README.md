<div align="center">

# ☕ MW & Co., Chartered Accountants — Website

**A premium, fully responsive website** for **MW & Co., Chartered Accountants**
<br>Luxury espresso-brown + metallic-gold identity · full white-hat SEO · Vercel-ready

_**Commitment to Excellence** · Trust · Expertise · Excellence_

<br>

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

![License: MIT](https://img.shields.io/badge/License-MIT-3DA639?style=for-the-badge&logo=opensourceinitiative&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-White_Hat-6F4E37?style=for-the-badge&logo=google&logoColor=white)
![Local SEO](https://img.shields.io/badge/Local_SEO-Multan_·_Lahore_·_Karachi-C9A24B?style=for-the-badge&logo=googlemaps&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 📖 About the project

This is the official marketing website for **MW & Co., Chartered Accountants** — a luxury, conversion-focused, SEO-first site that showcases the firm's services, builds trust, and turns visitors into leads through a **WhatsApp-first contact flow** (no backend required). It ships with **per-city local landing pages** and a **blog** structure built for content marketing, so the firm can rank for "chartered accountant" searches across multiple cities.

> 🛠️ **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## ✨ Features

| | Feature |
|---|---|
| 🎨 | **Luxury brand identity** — espresso-brown + metallic-gold, Playfair Display · Inter · Great Vibes fonts, refined micro-animations |
| 📱 | **Fully responsive** — mobile-first, smooth Framer Motion scroll reveals |
| 💬 | **WhatsApp-first contact** — the form composes a pre-filled WhatsApp message on submit; no backend, no database |
| 📍 | **Local SEO landing pages** — one per city (`/chartered-accountant-multan`, `-lahore`, `-karachi`) |
| 📝 | **Blog** — statically-generated posts (`/blog/[slug]`) ready for content marketing |
| 🔍 | **Full white-hat SEO** — unique title/description/canonical per page, OG + Twitter cards, JSON-LD (Organization, AccountingService/LocalBusiness, FAQPage, BreadcrumbList, BlogPosting), `sitemap.xml`, `robots.txt` |
| ⚙️ | **Single source of truth** — all content (NAP, services, FAQ, cities, blog) lives in `lib/constants.ts` |
| 🖼️ | **Performance** — AVIF/WebP images, lazy loading, `next/font` (no render-blocking) |
| 🔖 | **PWA-ready** — web manifest + full favicon set (auto-generated from the monogram) |

---

## 🗂️ Directory structure

```
mw-and-co/
├─ app/
│  ├─ layout.tsx                 # fonts, site metadata, OG, Organization JSON-LD
│  ├─ page.tsx                   # single-page home (all sections) + FAQ JSON-LD
│  ├─ globals.css                # Tailwind layers + brand component classes
│  ├─ manifest.ts                # PWA / site.webmanifest
│  ├─ robots.ts                  # /robots.txt
│  ├─ sitemap.ts                 # /sitemap.xml
│  ├─ not-found.tsx              # branded 404
│  ├─ icon.png · apple-icon.png · favicon.ico   # auto-linked by Next.js
│  ├─ services/page.tsx          # services detail page
│  ├─ chartered-accountant-multan/    # local SEO landing pages (one per city)
│  ├─ chartered-accountant-lahore/
│  ├─ chartered-accountant-karachi/
│  ├─ blog/page.tsx              # blog index
│  └─ blog/[slug]/page.tsx       # blog post (statically generated)
├─ components/                   # Navbar, Hero, About, Services, WhyUs, Faq,
│                                # Contact, Footer, WhatsAppButton, + primitives
├─ lib/
│  ├─ constants.ts               # ← single source of truth (NAP, services, FAQ…)
│  └─ schema.ts                  # JSON-LD structured data builders
├─ scripts/
│  └─ generate-favicons.mjs      # regenerate the favicon set from the monogram
├─ public/
│  ├─ images/                    # mw-logo.png, partner-portrait.jpg, og-image.jpg
│  └─ favicon-*.png · apple-touch-icon.png · android-chrome-*.png · favicon.ico
├─ tailwind.config.js            # brand colour tokens
└─ README.md
```

---

## ⚙️ How it works

1. **Content-driven** — almost everything (contact/NAP, services, FAQ, cities, blog posts, production URL) is defined once in `lib/constants.ts` and flows through the UI, metadata, sitemap, and structured data.
2. **Structured data** — `lib/schema.ts` builds JSON-LD (Organization, AccountingService/LocalBusiness, FAQPage, BreadcrumbList, BlogPosting) injected per page for rich results.
3. **Local SEO** — the `CITIES` list drives a dedicated landing page per city plus sitemap entries — the biggest local-ranking win.
4. **Contact → WhatsApp** — the contact form builds a formatted message and opens a pre-filled WhatsApp chat. Swap `handleSubmit` to POST to email/CRM (Formspree or a Route Handler) if needed.
5. **Blog** — posts in `BLOG_POSTS` are statically generated at `/blog/[slug]` for fast, indexable content marketing.

---

## 🔌 Scripts & API

### NPM scripts

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node **18.18+**, tested on Node 20) |
| `npm run dev` | Start the dev server → http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run gen:favicons` | Regenerate the full favicon set from the MW monogram |

> ℹ️ The `dev`/`build`/`start`/`lint` scripts call the Next.js binary through `node` directly, because Windows' `npm` runner mis-parses the `&` in the `mw&co` folder path. For the smoothest tooling you can rename the folder to `mw-and-co` and revert to the plain `next dev` / `next build` form.

### 💬 Contact → WhatsApp integration (the app's core "API")

The contact form has **no server backend** — it turns the enquiry into a pre-filled WhatsApp deep link. This is the single integration the site converts through:

```ts
// lib/whatsapp.ts
import { CONTACT } from "@/lib/constants";

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/** Build a pre-filled WhatsApp chat URL from a contact enquiry. */
export function buildWhatsAppLink(e: Enquiry): string {
  const lines = [
    "☕ *New Enquiry — MW & Co., Chartered Accountants*",
    `👤 Name: ${e.name}`,
    `✉️ Email: ${e.email}`,
    `📞 Phone: ${e.phone}`,
    `📂 Service: ${e.service}`,
    `📝 Message: ${e.message}`,
  ];

  const text = encodeURIComponent(lines.join("\n"));
  // CONTACT.whatsapp = international number, digits only (e.g. "923001234567")
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`;
}
```

```tsx
// usage inside components/Contact.tsx → handleSubmit
window.open(buildWhatsAppLink(form), "_blank", "noopener,noreferrer");
```

### 🔖 Favicon generation script

```bash
npm run gen:favicons   # outputs brown-circle + gold-ring icons: 16/32/180/192/512 + favicon.ico
```

---

## 🚀 Getting started (for anyone using this project)

### 1. Clone & install

```bash
git clone https://github.com/<your-username>/mw-and-co.git
cd mw-and-co
npm install
```

### 2. Run

```bash
npm run dev      # → http://localhost:3000
```

### 3. Build for production

```bash
npm run build && npm run start
```

### ✏️ Edit content

Everything lives in **`lib/constants.ts`** — edit once, it flows everywhere:

- **Contact / NAP** → `CONTACT` (WhatsApp, phone, email, cities)
- **Services** → `SERVICES` (title, group, icon, descriptions)
- **FAQ** → `FAQS`
- **Cities** → `CITIES` (drives local landing pages + sitemap)
- **Blog** → `BLOG_POSTS`
- **Production URL** → `SITE_URL` (canonical, OG, sitemap) — set your real domain before deploying

Brand colours live in **`tailwind.config.js`** → `theme.extend.colors` (`espresso`, `coffee`, `gold`, `champagne`, `bronze`, `cream`, `offwhite`).

---

## ☁️ Deploy to Vercel

1. Push the folder to a Git repo (GitHub / GitLab / Bitbucket).
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js auto-detected, zero config.
3. Set your custom domain and update `SITE_URL` in `lib/constants.ts`.
4. **After deploy:** verify the domain in **Google Search Console**, submit the sitemap, and create a **Google Business Profile** for each city (biggest local-SEO win). See `MW-Co-SEO-Strategy.md`.

---

## ✅ SEO checklist (built in)

- [x] Unique title + meta description + canonical per page (Metadata API)
- [x] Open Graph + Twitter cards
- [x] Semantic HTML, one `<h1>` per page, logical heading hierarchy, alt text
- [x] JSON-LD: `Organization`, `AccountingService`/`LocalBusiness`, `FAQPage`, `BreadcrumbList`, `BlogPosting`
- [x] `sitemap.xml` + `robots.txt`
- [x] Per-city local landing pages (`/chartered-accountant-<city>`)
- [x] Blog structure ready for content marketing
- [x] Modern image formats (AVIF/WebP), lazy loading, `next/font` (no render-block)

---

## 📊 Tech stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 MW & Co., Chartered Accountants

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**MW & Co., Chartered Accountants**
<br>_Together, we commit to excellence._

</div>
