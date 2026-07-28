// ============================================================================
// MW & Co., Chartered Accountants — central site data (single source of truth)
// Update NAP, services, cities, and FAQ here and it flows through the whole site
// (UI, metadata, sitemap, and JSON-LD structured data).
// ============================================================================

/** Canonical production URL — used for metadata, OG, canonical tags, sitemap. */
export const SITE_URL = "https://www.mehwaj.pk";

export const SITE = {
  name: "MW & Co., Chartered Accountants",
  shortName: "MW & Co.",
  legalName: "MW & Co., Chartered Accountants",
  tagline: "Commitment to Excellence",
  secondaryLine: "Trust. Expertise. Excellence.",
  description:
    "MW & Co., Chartered Accountants — expert audit, tax, accounting, and financial advisory services in Multan, Lahore & Karachi. Commitment to Excellence.",
  positioning:
    "Delivering reliable financial solutions and strategic insights that help businesses grow with confidence. Serving individuals, startups, SMEs, and corporate clients.",
  founder: {
    name: "Syed Muhammad Wajahat",
    credential: "ACA",
    title: "Partner & Sole Proprietor",
  },
  priceRange: "$$",
  foundingYear: "2020",
} as const;

// --- NAP (Name, Address, Phone) — keep 100% consistent across the whole site ---
export const CONTACT = {
  whatsapp: {
    display: "+92 317 6609 843",
    /** wa.me expects digits only, with country code, no plus or spaces */
    intl: "923176609843",
    href: "https://wa.me/923176609843",
  },
  phone: {
    display: "+92 304 6451 848",
    /** tel: expects +country code, digits only */
    tel: "+923046451848",
    href: "tel:+923046451848",
  },
  email: {
    display: "info@mehwaj.pk",
    href: "mailto:info@mehwaj.pk",
  },
  cities: ["Multan", "Lahore", "Karachi"] as const,
} as const;

/** Pre-filled WhatsApp message for the consultation CTAs. */
export const WHATSAPP_CTA_HREF = `${CONTACT.whatsapp.href}?text=${encodeURIComponent(
  "Hello MW & Co., I'd like to book a consultation regarding your accountancy services."
)}`;

// --- Social profiles (used in footer + schema `sameAs`) ---
export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/", handle: "MW & Co." },
  { name: "Facebook", href: "https://www.facebook.com/", handle: "MW & Co." },
  { name: "Instagram", href: "https://www.instagram.com/", handle: "MW & Co." },
] as const;

// --- Primary navigation (anchors on the single-page home) ---
export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

// ============================================================================
// SERVICES — the 8 core offerings, grouped by discipline.
// `icon` maps to a key in components/Icons.tsx.
// ============================================================================
export type ServiceGroup = "Audit & Assurance" | "Tax" | "Advisory";

export interface Service {
  slug: string;
  title: string;
  group: ServiceGroup;
  icon: string;
  short: string; // 1–2 line card description
  long: string; // longer copy for the services page / schema
}

export const SERVICES: Service[] = [
  {
    slug: "external-audit",
    title: "External Audit",
    group: "Audit & Assurance",
    icon: "clipboard-check",
    short:
      "Independent statutory audits that give stakeholders confidence in your financial statements.",
    long: "Independent, ICAP-compliant statutory and financial statement audits that give shareholders, lenders, and regulators confidence in the numbers — delivered with rigour, objectivity, and clear communication.",
  },
  {
    slug: "internal-audit",
    title: "Internal Audit",
    group: "Audit & Assurance",
    icon: "shield-search",
    short:
      "Risk-based reviews of controls and processes to safeguard assets and improve efficiency.",
    long: "Risk-based internal audit and controls assurance that strengthen governance, safeguard assets, and surface practical improvements to your processes and operating efficiency.",
  },
  {
    slug: "tax-consultation",
    title: "Tax Consultation",
    group: "Tax",
    icon: "scale",
    short:
      "Strategic tax planning to legally minimise liability and keep you fully compliant.",
    long: "Strategic, forward-looking tax advice for individuals and businesses — structuring, planning, and FBR advisory that legally optimises your position while keeping you fully compliant.",
  },
  {
    slug: "tax-compliance-return-filing",
    title: "Tax Compliance & Return Filing",
    group: "Tax",
    icon: "file-invoice",
    short:
      "Accurate, on-time income and sales tax return filing with the FBR — hassle-free.",
    long: "End-to-end tax compliance: NTN registration, income and sales tax return preparation, and accurate, on-time e-filing with the FBR — so you meet every deadline without the stress.",
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    group: "Advisory",
    icon: "calculator",
    short:
      "Clean, reliable books and management accounts so you always know where you stand.",
    long: "Outsourced accounting and bookkeeping — day-to-day record keeping, reconciliations, payroll, and monthly management accounts that give you a clear, real-time view of your finances.",
  },
  {
    slug: "business-valuation",
    title: "Business Valuation",
    group: "Advisory",
    icon: "chart-growth",
    short:
      "Defensible valuations for investment, sale, disputes, or financial reporting.",
    long: "Robust, defensible business and share valuations for transactions, fundraising, disputes, and financial reporting — grounded in recognised methodologies and sound professional judgement.",
  },
  {
    slug: "ifrs-advisory",
    title: "IFRS Advisory",
    group: "Advisory",
    icon: "globe",
    short:
      "Practical guidance on adopting and applying International Financial Reporting Standards.",
    long: "Practical IFRS advisory — first-time adoption, complex accounting treatments, and reporting under International Financial Reporting Standards, translated into clear, actionable steps for your team.",
  },
  {
    slug: "financial-business-advisory",
    title: "Financial & Business Advisory",
    group: "Advisory",
    icon: "handshake",
    short:
      "Strategic insight on growth, finance, and structure to help your business scale.",
    long: "Strategic financial and business advisory — budgeting, forecasting, feasibility studies, financing, and structuring — partnering with you to make confident decisions and grow sustainably.",
  },
];

/** Ordered list of the service groups for grouped rendering. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  "Audit & Assurance",
  "Tax",
  "Advisory",
];

// ============================================================================
// TRUST / STAT CARDS (About section)
// ============================================================================
export const STATS = [
  { value: "3", label: "Cities Served", sub: "Multan • Lahore • Karachi" },
  { value: "ACA", label: "Qualified", sub: "ICAP Chartered Accountant" },
  { value: "8+", label: "Core Services", sub: "Audit • Tax • Advisory" },
  { value: "100%", label: "Commitment", sub: "To Excellence" },
] as const;

// ============================================================================
// WHY CHOOSE US — core values
// ============================================================================
export const VALUES = [
  {
    icon: "medal",
    title: "Quality",
    text: "Work delivered to the exacting professional standards expected of a Chartered Accountancy practice.",
  },
  {
    icon: "shield-check",
    title: "Integrity",
    text: "Honest, independent, and ethical advice you can rely on — always in your best interest.",
  },
  {
    icon: "lightbulb",
    title: "Practical Solutions",
    text: "Clear, actionable guidance tailored to your business — not textbook theory.",
  },
  {
    icon: "star",
    title: "Reliable Expertise",
    text: "Deep technical knowledge across audit, tax, and advisory, applied with real-world experience.",
  },
] as const;

// ============================================================================
// CITIES — dedicated local landing pages for local SEO
// ============================================================================
export interface City {
  slug: string; // used in /chartered-accountant-<slug>
  name: string;
  region: string;
  blurb: string;
  landmarks: string;
}

export const CITIES: City[] = [
  {
    slug: "multan",
    name: "Multan",
    region: "Punjab",
    blurb:
      "As Chartered Accountants serving Multan and Southern Punjab, MW & Co. supports local traders, manufacturers, agriculturists, and SMEs with audit, tax filing, and advisory services rooted in the city's business community.",
    landmarks: "the City of Saints",
  },
  {
    slug: "lahore",
    name: "Lahore",
    region: "Punjab",
    blurb:
      "In Lahore, Pakistan's commercial and cultural heart, MW & Co. serves growing startups, established SMEs, and corporate clients with statutory audits, FBR tax compliance, IFRS advisory, and strategic financial guidance.",
    landmarks: "Pakistan's cultural capital",
  },
  {
    slug: "karachi",
    name: "Karachi",
    region: "Sindh",
    blurb:
      "In Karachi, the nation's financial powerhouse, MW & Co. delivers external and internal audit, business valuation, and tax advisory to corporates, importers, exporters, and fast-scaling businesses across the metropolis.",
    landmarks: "Pakistan's financial capital",
  },
];

// ============================================================================
// FAQ — question-based content targeting long-tail search (FAQPage schema)
// ============================================================================
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "How do I file my income tax return in Pakistan?",
    answer:
      "To file your income tax return in Pakistan you first need an NTN and an active IRIS account with the FBR. You then declare your income, wealth, and deductions for the tax year and submit the return before the deadline. MW & Co. handles the entire process for you — registration, preparation, and accurate e-filing — for salaried individuals, freelancers, and businesses.",
  },
  {
    question: "What is the difference between an external audit and an internal audit?",
    answer:
      "An external audit is an independent examination of your financial statements carried out for shareholders, lenders, and regulators to confirm they give a true and fair view. An internal audit is an ongoing, risk-based review of your own controls, processes, and governance to help management reduce risk and improve efficiency. MW & Co. provides both.",
  },
  {
    question: "Do freelancers in Pakistan need to file a tax return?",
    answer:
      "Yes. Freelancers and IT exporters in Pakistan are generally required to register with the FBR and file an annual income tax return, and doing so keeps you on the Active Taxpayer List (ATL) — which reduces withholding tax on many transactions and unlocks concessional tax treatment on export income. We help freelancers register and file correctly.",
  },
  {
    question: "What is IFRS and why does my business need it?",
    answer:
      "IFRS (International Financial Reporting Standards) is the globally recognised framework for preparing financial statements. Applying IFRS correctly makes your accounts comparable, credible, and acceptable to investors, banks, and regulators. MW & Co. provides IFRS advisory covering first-time adoption and complex accounting treatments.",
  },
  {
    question: "Which cities does MW & Co. serve?",
    answer:
      "MW & Co., Chartered Accountants serves clients across Pakistan, with a presence in Multan, Lahore, and Karachi. We support individuals, startups, SMEs, and corporate clients both on-site and remotely.",
  },
  {
    question: "How do I get started with MW & Co.?",
    answer:
      "Getting started is simple. Message us on WhatsApp at +92 317 6609 843, call +92 304 6451 848, or email info@mehwaj.pk to book a free initial consultation. We'll discuss your needs and recommend the right audit, tax, or advisory service for you.",
  },
];

// ============================================================================
// BLOG — SEO content structure (starter posts)
// ============================================================================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  body: string[]; // paragraphs (simple starter content)
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-file-income-tax-return-pakistan-2026",
    title: "How to File Your Income Tax Return in Pakistan (2026 Guide)",
    excerpt:
      "A step-by-step guide to filing your income tax return with the FBR in 2026 — from NTN registration to submitting through IRIS and staying on the Active Taxpayer List.",
    date: "2026-06-15",
    readingTime: "6 min read",
    category: "Tax",
    body: [
      "Filing your income tax return in Pakistan is an annual obligation for most earners — and staying compliant keeps you on the Active Taxpayer List (ATL), which meaningfully lowers the withholding tax you pay on banking, property, and vehicle transactions.",
      "Step 1 — Register for an NTN. Before you can file, you need a National Tax Number. Registration is done online through the FBR's IRIS portal using your CNIC, and it typically takes only a short time to complete.",
      "Step 2 — Gather your documents. Collect your salary certificate or business income records, bank statements, details of assets and liabilities, and any tax already deducted at source during the year.",
      "Step 3 — Declare income and wealth. In IRIS you complete the income tax return and the wealth statement, reconciling the change in your net assets with your declared income for the tax year.",
      "Step 4 — File before the deadline. Submitting on time is what places you on the ATL. Late filers can still appear on the list but usually pay a surcharge first.",
      "If any of this feels daunting, MW & Co. files returns for salaried individuals, freelancers, and businesses every year. Reach out and we'll handle the whole process accurately and on time.",
    ],
  },
  {
    slug: "external-vs-internal-audit-difference",
    title: "External vs Internal Audit: What's the Difference?",
    excerpt:
      "Both protect your business, but they answer to different audiences and serve different goals. Here's how external and internal audit compare — and when you need each.",
    date: "2026-05-02",
    readingTime: "5 min read",
    category: "Audit & Assurance",
    body: [
      "The words 'audit' can mean very different things depending on who the work is for. The two most common are external audit and internal audit — and understanding the difference helps you invest in the right assurance for your business.",
      "An external audit is an independent examination of your financial statements. Its purpose is to give an opinion, to outside stakeholders such as shareholders, banks, and regulators, on whether those statements present a true and fair view. It is often a statutory requirement.",
      "An internal audit, by contrast, is carried out for management. It is an ongoing, risk-based review of your internal controls, processes, and governance — designed to reduce risk, prevent fraud, and improve operational efficiency.",
      "In short: external audit looks backward and outward to give assurance to others; internal audit looks forward and inward to help you run a tighter ship. Many growing companies benefit from both.",
      "MW & Co. provides independent external audits and risk-based internal audit services. Get in touch to discuss which is right for your organisation.",
    ],
  },
  {
    slug: "what-is-ifrs-and-why-your-business-needs-it",
    title: "What is IFRS and Why Your Business Needs It",
    excerpt:
      "International Financial Reporting Standards make your accounts credible and comparable worldwide. Here's what IFRS is, and why adopting it matters for a growing business.",
    date: "2026-03-20",
    readingTime: "5 min read",
    category: "Advisory",
    body: [
      "IFRS — International Financial Reporting Standards — is the globally recognised framework for preparing and presenting financial statements. It sets out how transactions and events should be recognised, measured, and disclosed.",
      "Why does it matter? Because IFRS makes your financial statements comparable across companies and borders, and credible in the eyes of investors, lenders, and regulators. If you plan to raise capital, attract foreign investment, or work with international partners, IFRS-compliant accounts are often expected.",
      "Adopting IFRS for the first time, or applying it to complex areas such as revenue, leases, or financial instruments, can be technically demanding. Getting it wrong can distort your reported results.",
      "MW & Co. provides practical IFRS advisory — from first-time adoption to complex accounting treatments — translating the standards into clear, actionable steps for your finance team.",
    ],
  },
];
