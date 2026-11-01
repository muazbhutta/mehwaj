# Website Build Prompt — M.W. & Co., Chartered Accountants

> Copy-paste this entire prompt into your AI website builder (v0, Lovable, Cursor, Bolt) or hand it to a developer.

---

## ROLE
You are a senior front-end developer and UI/UX designer specializing in premium, corporate financial-services websites. Build a modern, fully responsive, professional website for a Chartered Accountancy (CA) firm. The site must convey **trust, expertise, and excellence** — the standard expected in the audit and financial-advisory industry.

## COMPANY / BRAND
- **Firm Name:** M.W. & Co., Chartered Accountants
- **Tagline / Slogan:** "Commitment to Excellence"
- **Secondary line:** "Trust. Expertise. Excellence."
- **Partner & Sole Proprietor:** Syed Muhammad Wajahat, ACA
- **Positioning:** Delivering reliable financial solutions and strategic insights that help businesses grow with confidence. Serving individuals, startups, SMEs, and corporate clients.
- **Core values:** Quality, Integrity, Practical Solutions.

## LOGO & FAVICON
- The brand logo is an "MW" monogram — an elegant white cursive M+W inside a dark chocolate-brown circle, surrounded by a swirling gold/bronze ring.
- Use the provided logo image (`MW-Logo.png`) in the navbar (left side) and footer.
- **Favicon:** Generate the favicon directly from the MW monogram — the brown circle with the gold ring and white "MW". Provide favicon in 16x16, 32x32, 180x180 (apple-touch-icon) and a `site.webmanifest`. The favicon background should stay the brown circle so it reads clearly in browser tabs.

## COLOR PALETTE (use these exact tokens)
Base the whole site on this luxury brown + gold + cream scheme:

| Purpose | Color | Hex |
|---|---|---|
| Primary dark (backgrounds, footer) | Espresso Brown | `#2B1B10` |
| Secondary dark | Rich Coffee Brown | `#4A2E1C` |
| Primary accent | Metallic Gold | `#C79A4B` |
| Light gold (highlights, hover) | Champagne Gold | `#E5C87E` |
| Deep gold (borders/dividers) | Bronze | `#A87B33` |
| Light background | Warm Cream / Ivory | `#F7F3EA` |
| Card / surface light | Off-White | `#FDFBF7` |
| Body text on light | Dark Charcoal Brown | `#2B1B10` |
| Text on dark | Off-White | `#F7F3EA` |

- Use subtle **gold gradients** (`#A87B33` → `#E5C87E` → `#C79A4B`) for buttons, section dividers, and accent lines — matching the brand's premium feel.
- Use elegant flowing/curved section separators (the branding uses smooth wave shapes between cream and brown blocks).
- Add a faint gold city-skyline line-art motif in the footer background (subtle, low-opacity), consistent with the brand poster.

## TYPOGRAPHY
- **Headings:** an elegant serif (e.g., Playfair Display or Cormorant Garamond) for a classic, authoritative CA feel.
- **Body / UI:** a clean modern sans-serif (e.g., Inter, Poppins, or Lato) for readability.
- **Accent script:** use a refined cursive/script font (e.g., Great Vibes or Dancing Script) ONLY for the tagline "Commitment to Excellence".
- Use generous letter-spacing on all-caps labels (like "CHARTERED ACCOUNTANTS", "OUR SERVICES").

## PAGE STRUCTURE (single-page with smooth-scroll nav, or multi-page — your choice, but include all sections)

### 1. Navbar (sticky, transparent-on-hero → solid brown on scroll)
Logo left; links: Home, About, Services, Why Us, Contact; a gold "Get a Consultation" button on the right.

### 2. Hero Section
- Cream/ivory background with a curved gold border transitioning into the brown section.
- Headline: **TRUST. EXPERTISE. EXCELLENCE.** (last word in gold).
- Sub-text: "Delivering reliable financial solutions and strategic insights to help your business grow with confidence."
- Two CTAs: primary gold "Book a Consultation" (links to WhatsApp/contact), secondary outline "Our Services".
- Right side: professional portrait of the partner (use provided image) inside an elegant gold-ringed frame/oval.

### 3. About Section
- Short intro to M.W. & Co. and the firm's mission.
- Highlight the partner: **Syed Muhammad Wajahat, ACA — Partner & Sole Proprietor**.
- 3–4 small stat/trust cards (e.g., "3 Cities", "ACA Qualified", "Individuals to Corporates", "Commitment to Excellence").

### 4. Services Section (grid of cards with gold line-icons, hover lift + gold glow)
Include all of these:
1. **External Audit**
2. **Internal Audit**
3. **Tax Consultation**
4. **Tax Compliance & Return Filing**
5. **Accounting & Bookkeeping**
6. **Business Valuation**
7. **IFRS Advisory**
8. **Financial & Business Advisory**

Each card: icon + title + 1–2 line description. Optional grouping: "Audit & Assurance", "Tax", "Advisory".

### 5. Why Choose Us Section
- Banner-style block on dark brown: "COMMITMENT TO EXCELLENCE — Your success is our priority."
- 3–4 value points: Quality, Integrity, Practical Solutions, Reliable Expertise.

### 6. Contact Section
- Contact form (Name, Email, Phone, Service dropdown, Message) styled in cream card with gold-accent inputs.
- Contact details block:
  - 📱 WhatsApp: **+92 317 6609 843** (make it a `wa.me` click-to-chat link)
  - 📞 Phone: **+92 304 6451 848** (tel: link)
  - 📧 Email: **info@mehwaj.pk** (mailto: link)
  - 📍 Offices: **Multan • Lahore • Karachi**
- Optional: three location cards / embedded map placeholders for each city.

### 7. Footer (dark espresso brown)
- MW logo + tagline, quick links, contact info, city list.
- Faint gold skyline line-art background motif.
- Bottom bar: "© 2026 M.W. & Co., Chartered Accountants. Together, we commit to excellence." plus small social icons.

## DESIGN / UX REQUIREMENTS
- **Fully responsive** (mobile-first): navbar collapses to a gold hamburger menu; service grid → single column on mobile; hero stacks vertically.
- **Micro-interactions:** smooth scroll, subtle fade/slide-in on scroll (AOS-style), gold hover states on buttons & cards.
- A **floating WhatsApp button** (bottom-right, green→gold styling) linking to `wa.me/923176609843`.
- Accessible: proper contrast, alt text, semantic HTML, keyboard-navigable.
- Fast & clean: optimized images, no heavy libraries unless needed.

## SEO / META
- Page `<title>`: "M.W. & Co. | Chartered Accountants — Audit, Tax & Advisory in Pakistan"
- Meta description: "M.W. & Co., Chartered Accountants — expert audit, tax, accounting, and financial advisory services in Multan, Lahore & Karachi. Commitment to Excellence."
- Add Open Graph tags (title, description, logo image) and the favicon set described above.
- Keywords focus: chartered accountants Pakistan, audit services, tax return filing, IFRS advisory, bookkeeping Multan Lahore Karachi.

## TECH STACK (fixed)
- **Next.js (App Router) + Tailwind CSS + Framer Motion** — fast, SEO-friendly, easy favicon/meta/structured-data handling, ready for Vercel deployment.
- Define the brand color tokens in `tailwind.config.js` (theme.extend.colors) and reuse them everywhere.
- Use Next.js built-in `metadata` API for per-page title/description/Open Graph, the `app` directory for routing (including per-city location pages), and a `sitemap.ts` + `robots.ts` for SEO.
- Deliver clean, commented, production-ready code, structured for `git` + Vercel deployment.

## DELIVERABLE
A complete, polished, deployment-ready CA-firm website matching the brown-and-gold luxury brand identity above, with working favicon, responsive layout, all 8 services, contact links, and the "Commitment to Excellence" theme throughout.
