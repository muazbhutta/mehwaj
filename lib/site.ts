// ============================================================================
// M.W. & Co., Chartered Accountants
// Firm facts and structural site data shared by both languages.
// Visible copy lives in lib/i18n/en and lib/i18n/ar; this file holds the facts
// that never change between languages (phone numbers, slugs, groupings).
// ============================================================================

/** Canonical production URL, used for metadata, canonical tags and sitemap. */
export const SITE_URL = "https://www.mehwaj.pk";

export const FIRM = {
  /** Short brand name, always written with dots. */
  name: "M.W. & Co.",
  /** Full legal name. */
  fullName: "M.W. & Co., Chartered Accountants",
  /** Logo wordmark. */
  wordmark: "M.W. & CO.",
  icapCertificateNo: "002196",
  membershipNo: "14579",
  foundingYear: "2026",
  proprietor: "Syed Muhammad Wajahat",
  address: {
    street: "House 3, Street 3, Block G, Royal Orchard",
    locality: "Multan",
    country: "Pakistan",
    countryCode: "PK",
    /** Used in the footer and contact cards. */
    short: "House 3, Street 3, Block G, Royal Orchard, Multan",
    full: "House 3, Street 3, Block G, Royal Orchard, Multan, Pakistan",
  },
  whatsapp: {
    display: "+92 317 660 9843",
    intl: "923176609843",
    href: "https://wa.me/923176609843",
  },
  office: {
    display: "+92 304 6451 848",
    href: "tel:+923046451848",
  },
  taxManager: {
    display: "+92 311 689 5257",
    href: "tel:+923116895257",
  },
  saudi: {
    display: "+966 50 842 2667",
    href: "tel:+966508422667",
  },
  email: {
    display: "info@mehwaj.pk",
    href: "mailto:info@mehwaj.pk",
  },
  linkedin: "https://www.linkedin.com/in/syed-muhammad-wajahat-aca",
  /** Used only in JSON-LD sameAs, not in the footer. */
  social: [
    "https://www.linkedin.com/in/syed-muhammad-wajahat-aca",
    "https://www.facebook.com/share/1JPh2uzvCC/",
    "https://www.instagram.com/syedwajahataca",
  ],
} as const;

/** Builds a wa.me link with a pre-filled message. */
export function whatsappHref(message: string): string {
  return `${FIRM.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto link with a pre-filled subject and body. */
export function mailtoHref(subject: string, body: string): string {
  return `${FIRM.email.href}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

// ---------------------------------------------------------------------------
// Services: slugs and groups. Titles and body copy live in the dictionaries.
// ---------------------------------------------------------------------------
export type ServiceGroupKey =
  | "assurance"
  | "taxZakat"
  | "advisory"
  | "accounting";

export const SERVICE_GROUPS: ServiceGroupKey[] = [
  "assurance",
  "taxZakat",
  "advisory",
  "accounting",
];

export interface ServiceMeta {
  slug: string;
  group: ServiceGroupKey;
}

/** The 14 service pages, in the order they appear on the services index. */
export const SERVICES: ServiceMeta[] = [
  { slug: "external-audit", group: "assurance" },
  { slug: "review-engagements", group: "assurance" },
  { slug: "agreed-upon-procedures", group: "assurance" },
  { slug: "income-tax", group: "taxZakat" },
  { slug: "sales-tax", group: "taxZakat" },
  { slug: "tax-notices", group: "taxZakat" },
  { slug: "zakat-vat-saudi", group: "taxZakat" },
  { slug: "internal-audit", group: "advisory" },
  { slug: "ifrs-advisory", group: "advisory" },
  { slug: "financial-modelling", group: "advisory" },
  { slug: "business-valuation", group: "advisory" },
  { slug: "secp-compliance", group: "advisory" },
  { slug: "bookkeeping", group: "accounting" },
  { slug: "financial-statements", group: "accounting" },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function serviceGroupOf(slug: string): ServiceGroupKey | undefined {
  return SERVICES.find((s) => s.slug === slug)?.group;
}

/**
 * The four service cards on the home page. "finance-secondment" is not a
 * service page: it links to the secondments page instead.
 */
export const HOME_SERVICE_LINES: Record<ServiceGroupKey, string[]> = {
  assurance: ["external-audit", "review-engagements", "agreed-upon-procedures"],
  taxZakat: ["income-tax", "sales-tax", "tax-notices", "zakat-vat-saudi"],
  advisory: [
    "internal-audit",
    "ifrs-advisory",
    "financial-modelling",
    "business-valuation",
    "secp-compliance",
  ],
  accounting: ["bookkeeping", "financial-statements", "finance-secondment"],
};

// ---------------------------------------------------------------------------
// Cities with a dedicated landing page.
// ---------------------------------------------------------------------------
export const CITY_SLUGS = ["multan", "lahore", "karachi", "islamabad"] as const;
export type CitySlug = (typeof CITY_SLUGS)[number];

// ---------------------------------------------------------------------------
// Secondment jurisdictions. Factual experience only: never add a country here
// that the team has not actually worked in.
// ---------------------------------------------------------------------------
export const JURISDICTION_CODES = ["ksa", "uae", "qa", "bvi"] as const;
export type JurisdictionCode = (typeof JURISDICTION_CODES)[number];

/** Short codes shown inside the gold circles. */
export const JURISDICTION_LABELS: Record<JurisdictionCode, string> = {
  ksa: "KSA",
  uae: "UAE",
  qa: "QA",
  bvi: "BVI",
};

// ---------------------------------------------------------------------------
// Secondment roles.
// ---------------------------------------------------------------------------
export const ROLE_KEYS = [
  "auditSenior",
  "auditSupervisor",
  "auditManager",
  "seniorAccountant",
  "financialReporting",
  "fpa",
] as const;
export type RoleKey = (typeof ROLE_KEYS)[number];

// ---------------------------------------------------------------------------
// Countries. The full list lives in lib/countries.ts; these are the codes the
// forms pin to the top. Each dictionary sets its own order for the general
// forms, while the secondments form always leads with the Gulf.
// ---------------------------------------------------------------------------
export const GCC_CODES = ["SA", "AE", "QA", "KW", "BH", "OM"];

// ---------------------------------------------------------------------------
// Insights: article slugs in display order (four new ones, then the three
// earlier posts that moved across from the old blog).
// ---------------------------------------------------------------------------
export const POST_SLUGS = [
  "ifrs-18-replaces-ias-1-pakistan",
  "outsourcing-month-end-close-gulf",
  "private-limited-company-compliance-calendar-pakistan",
  "zakat-vat-returns-saudi-arabia-calendar",
  "how-to-file-income-tax-return-pakistan-2026",
  "external-vs-internal-audit-difference",
  "what-is-ifrs-and-why-your-business-needs-it",
] as const;
export type PostSlug = (typeof POST_SLUGS)[number];

/** The three posts featured on the home page. */
export const HOME_POST_SLUGS: PostSlug[] = [
  "ifrs-18-replaces-ias-1-pakistan",
  "private-limited-company-compliance-calendar-pakistan",
  "outsourcing-month-end-close-gulf",
];

// ---------------------------------------------------------------------------
// Leadership. Photos are optional: a person without one shows their initials.
// To add a photo later, drop the file in public/images and set `image` here.
// ---------------------------------------------------------------------------
export interface PersonMeta {
  slug: string;
  initials: string;
  image?: string;
  phoneHref?: string;
  phoneDisplay?: string;
}

export const PEOPLE: PersonMeta[] = [
  {
    slug: "syed-muhammad-wajahat",
    initials: "MW",
    image: "/images/partner-portrait.png",
  },
  {
    slug: "syeda-mehar-fatima",
    initials: "MF",
    // Headshot cropped from images/leader-mehar.png, which is a full length
    // portrait and frames badly in a circle.
    image: "/images/mehar-fatima.png",
  },
  {
    slug: "anas-farooq-maniya",
    initials: "AF",
    // Headshot cropped from images/anas-farooq-full.jpg. Photos under
    // /images are cached hard, so a replacement gets a new filename rather
    // than overwriting the old one.
    image: "/images/anas-farooq-v2.png",
  },
  {
    slug: "hamza-amir",
    initials: "HA",
    // Headshot cropped from images/hamza-amir-full.jpg.
    image: "/images/hamza-amir.png",
  },
];

export const LEGAL_SLUGS = ["privacy", "terms", "disclaimer"] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];
