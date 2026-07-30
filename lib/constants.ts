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
  cities: ["Islamabad", "Lahore", "Multan", "Karachi"] as const,
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
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/#contact" },
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
      "Our external audit services provide an independent, objective examination of your financial statements, offering assurance on their accuracy and compliance with relevant reporting standards. This service enhances stakeholder confidence and transparency.",
    long: "Independent, ICAP-compliant statutory and financial statement audits that give shareholders, lenders, and regulators confidence in the numbers — delivered with rigour, objectivity, and clear communication.",
  },
  {
    slug: "internal-audit",
    title: "Internal Audit",
    group: "Audit & Assurance",
    icon: "shield-search",
    short:
      "We conduct risk-based internal audits to evaluate and improve the effectiveness of your organization's risk management, control, and governance processes. Our focus is on safeguarding assets and optimizing operational efficiency.",
    long: "Risk-based internal audit and controls assurance that strengthen governance, safeguard assets, and surface practical improvements to your processes and operating efficiency.",
  },
  {
    slug: "tax-consultation",
    title: "Tax Consultation",
    group: "Tax",
    icon: "scale",
    short:
      "Our strategic tax consultation helps you navigate complex tax legislation. We provide proactive advice on legal tax planning to optimize your position, minimize liabilities, and ensure full regulatory compliance.",
    long: "Strategic, forward-looking tax advice for individuals and businesses — structuring, planning, and FBR advisory that legally optimises your position while keeping you fully compliant.",
  },
  {
    slug: "tax-compliance-return-filing",
    title: "Tax Compliance & Return Filing",
    group: "Tax",
    icon: "file-invoice",
    short:
      "We ensure accurate and timely income and sales tax return filing with regulatory bodies like the FBR. Our services guarantee full compliance and a completely hassle-free experience for your business.",
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
// LEADERSHIP — firm leaders featured in the "Our Leadership" section
// ============================================================================
export interface LeaderDetail {
  icon: string;
  label: string;
  text: string;
}

export interface Leader {
  name: string;
  title: string;
  image: string;
  credential?: string;
  bio: string[];
  expertiseTitle: string;
  expertise: LeaderDetail[];
  regionTitle: string;
  regions: LeaderDetail[];
}

export const LEADERS: Leader[] = [
  {
    name: "Syed Muhammad Wajahat",
    credential: "ACA",
    title: "Partner & Sole Proprietor at MW & Co.",
    image: "/images/partner-portrait.png",
    bio: [
      "Syed Muhammad Wajahat is a qualified Chartered Accountant (ACA) and a member of the Institute of Chartered Accountants of Pakistan (ICAP). With extensive professional experience spanning cross-border markets in Saudi Arabia and Pakistan, he specializes in delivering high-value financial advisory, corporate compliance, and strategic accounting solutions.",
      "Throughout his career, Syed Muhammad Wajahat has built deep operational and financial insights across a diverse range of economic sectors. His professional portfolio includes driving fiscal discipline, regulatory compliance, and business process optimizations for entities operating within complex regulatory environments.",
    ],
    expertiseTitle: "Core Industry Expertise",
    expertise: [
      {
        icon: "calculator",
        label: "Manufacturing & FMCG",
        text: "Optimizing supply chain finances, cost accounting frameworks, inventory controls, and working capital management.",
      },
      {
        icon: "building",
        label: "Construction & Real Estate",
        text: "Advising on long-term contract accounting, project financing, risk mitigation, and sector-specific tax structures.",
      },
      {
        icon: "star",
        label: "Hospitality & Service Sectors",
        text: "Enhancing revenue management systems, operational audits, internal control frameworks, and service-delivery cost structures.",
      },
      {
        icon: "scale",
        label: "Financial Services",
        text: "Navigating complex financial reporting standards, regulatory compliance frameworks, and corporate governance.",
      },
    ],
    regionTitle: "Geographic Footprint",
    regions: [
      {
        icon: "map-pin",
        label: "Pakistan",
        text: "Comprehensive hands-on experience with local corporate laws, Federal Board of Revenue (FBR) compliance, and local business practices.",
      },
      {
        icon: "globe",
        label: "Saudi Arabia",
        text: "Strong familiarity with regional financial landscapes, Saudi corporate regulations, and localized business frameworks.",
      },
    ],
  },
  {
    name: "Syeda Mehar Fatima",
    title: "Managing Director at MW & Co.",
    image: "/images/leader-mehar.png",
    bio: [
      "Syeda Mehar Fatima serves as the Managing Director of the firm, overseeing its strategic direction, operational workflows, and client engagement frameworks. With a strong foundation in advanced corporate finance and accounting methodologies, she brings executive leadership and structured problem-solving to the firm's core management team.",
      "Her professional background includes managing complex financial portfolios and driving organizational efficiency across diverse regulatory landscapes in Pakistan and Saudi Arabia. She excels at aligning financial strategies with operational goals, ensuring robust internal controls, and fostering cross-functional team collaboration.",
    ],
    expertiseTitle: "Core Areas of Management Expertise",
    expertise: [
      {
        icon: "chart-growth",
        label: "Strategic Operations",
        text: "Overseeing firm-wide service delivery, project timelines, and operational resource allocation.",
      },
      {
        icon: "shield-check",
        label: "Corporate Governance",
        text: "Implementing internal policy frameworks, risk assessment matrices, and organizational compliance standards.",
      },
      {
        icon: "handshake",
        label: "Client Relationship Management",
        text: "Serving as a key liaison for corporate clients to align firm services with complex business needs.",
      },
      {
        icon: "file-invoice",
        label: "Financial Oversight",
        text: "Monitoring performance benchmarks, business process mapping, and operational financial planning.",
      },
    ],
    regionTitle: "Regional Exposure",
    regions: [
      {
        icon: "map-pin",
        label: "Pakistan Market",
        text: "Strong alignment with local corporate cultures, management practices, and administrative operational workflows.",
      },
      {
        icon: "globe",
        label: "Saudi Arabia Market",
        text: "Exposure to cross-border operational coordination and regional business practices.",
      },
    ],
  },
];

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
    slug: "islamabad",
    name: "Islamabad",
    region: "Capital Territory",
    blurb:
      "In Islamabad, the nation's capital, MW & Co. supports corporates, IT and consultancy firms, NGOs, and government contractors with audit, FBR tax compliance, company registration, and advisory services suited to the capital's regulatory environment.",
    landmarks: "the nation's capital",
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
    slug: "multan",
    name: "Multan",
    region: "Punjab",
    blurb:
      "As Chartered Accountants serving Multan and Southern Punjab, MW & Co. supports local traders, manufacturers, agriculturists, and SMEs with audit, tax filing, and advisory services rooted in the city's business community.",
    landmarks: "the City of Saints",
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
    question:
      "What is the difference between an external audit and an internal audit?",
    answer:
      "An external audit is an independent examination of your financial statements carried out for outside stakeholders — shareholders, lenders, and regulators — to give an opinion on whether the statements present a true and fair view; it is often a statutory requirement. An internal audit, by contrast, is an ongoing, risk-based review carried out for management to evaluate and improve the effectiveness of internal controls, risk management, and governance. In short, external audit looks outward to provide assurance to others, while internal audit looks inward to help you run the business more effectively. MW & Co. provides both.",
  },
  {
    question:
      "What are the key compliance requirements for a private limited company in Pakistan?",
    answer:
      "A private limited company in Pakistan must meet obligations with both the SECP and the FBR. Key requirements include incorporation and maintaining statutory records with the SECP; filing the annual return (Form A) and audited financial statements; obtaining an NTN and, where applicable, sales tax registration with the FBR; filing the annual income tax return along with periodic sales tax and withholding statements; correctly deducting and depositing withholding taxes; holding the Annual General Meeting; and keeping proper books of account. MW & Co. keeps you fully compliant with every SECP and FBR requirement and deadline.",
  },
  {
    question: "Can you assist with business setup and company registration?",
    answer:
      "Yes. MW & Co. provides end-to-end business setup and company registration services — advising on the right structure (sole proprietorship, partnership/AOP, or private limited company), name reservation and incorporation with the SECP, drafting the Memorandum and Articles of Association, NTN and sales tax registration with the FBR, and setting up your initial accounting and compliance framework — so you can start operating quickly and correctly.",
  },
  {
    question:
      "What are the benefits of outsourcing payroll and bookkeeping services to MW & Co.?",
    answer:
      "Outsourcing your payroll and bookkeeping to MW & Co. saves time and reduces cost, keeps your books accurate and up to date, and ensures compliance with tax and withholding requirements. You gain timely management accounts and reliable data for decision-making, freedom from hiring and managing in-house staff, and the confidence of having qualified professionals handle your records with discretion and accuracy — letting you focus on growing your business.",
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
