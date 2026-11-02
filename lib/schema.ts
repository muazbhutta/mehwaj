// ============================================================================
// JSON-LD structured data for M.W. & Co., Chartered Accountants.
// Emitted through <script type="application/ld+json"> so search engines can
// read the firm, its services, its breadcrumbs, its FAQ and its articles.
// ============================================================================

import { FIRM, SITE_URL, SERVICES } from "./site";
import { getDictionary, localePath } from "./i18n";
import type { FaqItem, Locale } from "./i18n/types";

const ORG_ID = `${SITE_URL}/#organization`;
const BUSINESS_ID = `${SITE_URL}/#accountingservice`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROPRIETOR_ID = `${SITE_URL}/#proprietor`;

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: FIRM.address.street,
  addressLocality: FIRM.address.locality,
  addressCountry: FIRM.address.countryCode,
} as const;

/** Pakistan plus the six GCC countries the firm serves. */
const AREA_SERVED = [
  "Pakistan",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
].map((name) => ({ "@type": "Country", name }));

const CONTACT_POINTS = [
  {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: FIRM.office.display,
    email: FIRM.email.display,
    areaServed: "PK",
    availableLanguage: ["en", "ur", "ar"],
  },
  {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: FIRM.saudi.display,
    email: FIRM.email.display,
    areaServed: ["SA", "AE", "QA", "KW", "BH", "OM"],
    availableLanguage: ["ar", "en"],
  },
];

/** Organization plus AccountingService graph, rendered in both root layouts. */
export function organizationSchema() {
  const en = getDictionary("en");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: FIRM.fullName,
        legalName: FIRM.fullName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/mw-logo-square.png`,
        },
        description: en.home.meta.description,
        foundingDate: FIRM.foundingYear,
        founder: {
          "@type": "Person",
          name: FIRM.proprietor,
          jobTitle: "Proprietor, ACA",
        },
        address: POSTAL_ADDRESS,
        contactPoint: CONTACT_POINTS,
        sameAs: [...FIRM.social],
      },
      {
        "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
        "@id": BUSINESS_ID,
        name: FIRM.fullName,
        url: SITE_URL,
        image: `${SITE_URL}/images/og-image.jpg`,
        logo: `${SITE_URL}/images/mw-logo-square.png`,
        description: en.home.meta.description,
        telephone: FIRM.office.display,
        email: FIRM.email.display,
        priceRange: "$$",
        foundingDate: FIRM.foundingYear,
        parentOrganization: { "@id": ORG_ID },
        founder: { "@id": PROPRIETOR_ID },
        employee: { "@id": PROPRIETOR_ID },
        address: POSTAL_ADDRESS,
        areaServed: AREA_SERVED,
        contactPoint: CONTACT_POINTS,
        inLanguage: ["en", "ar"],
        knowsAbout: SERVICES.map((s) => en.services[s.slug].title),
        makesOffer: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: en.services[s.slug].title,
            description: en.services[s.slug].intro,
            url: `${SITE_URL}/services/${s.slug}`,
          },
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [...FIRM.social],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: FIRM.fullName,
        description: en.home.meta.description,
        inLanguage: ["en", "ar"],
        publisher: { "@id": ORG_ID },
      },
      {
        // The named professional behind the work. Search engines and the
        // assistants that read this page both lean on it to judge whether a
        // firm is a real practice with a qualified person answerable for it.
        "@type": "Person",
        "@id": PROPRIETOR_ID,
        name: FIRM.proprietor,
        honorificSuffix: "ACA",
        jobTitle: "Proprietor",
        worksFor: { "@id": ORG_ID },
        url: `${SITE_URL}/about#syed-muhammad-wajahat`,
        image: `${SITE_URL}/images/partner-portrait.png`,
        sameAs: [FIRM.linkedin],
        memberOf: {
          "@type": "Organization",
          name: "Institute of Chartered Accountants of Pakistan",
          alternateName: "ICAP",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "professional membership",
          name: `Associate Member, ICAP, Membership No. ${FIRM.membershipNo}`,
        },
        knowsAbout: SERVICES.map((s) => en.services[s.slug].title),
        knowsLanguage: ["en", "ur", "ar"],
      },
    ],
  };
}

/** FAQPage schema, fed from the five home page questions. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList for a trail of { name, path } items. */
export function breadcrumbSchema(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${localePath(locale, item.path)}`,
    })),
  };
}

/** Service schema for one service page. */
export function serviceSchema(locale: Locale, slug: string) {
  const dict = getDictionary(locale);
  const service = dict.services[slug];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    url: `${SITE_URL}${localePath(locale, `/services/${slug}`)}`,
    serviceType: service.title,
    inLanguage: locale,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

/**
 * AccountingService scoped to one city page. The address is always the Multan
 * head office: the firm has no office in Lahore, Karachi or Islamabad.
 */
export function cityBusinessSchema(locale: Locale, citySlug: string) {
  const dict = getDictionary(locale);
  const city = dict.cities[citySlug as keyof typeof dict.cities];

  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    "@id": `${SITE_URL}${localePath(
      locale,
      `/chartered-accountant-${citySlug}`
    )}#business`,
    name: `${FIRM.fullName}, ${city.name}`,
    url: `${SITE_URL}${localePath(
      locale,
      `/chartered-accountant-${citySlug}`
    )}`,
    image: `${SITE_URL}/images/og-image.jpg`,
    description: city.meta.description,
    telephone: FIRM.office.display,
    email: FIRM.email.display,
    priceRange: "$$",
    address: POSTAL_ADDRESS,
    areaServed: { "@type": "City", name: city.name },
    parentOrganization: { "@id": ORG_ID },
  };
}

/** BlogPosting schema for one article. */
export function articleSchema(locale: Locale, slug: string) {
  const dict = getDictionary(locale);
  const post = dict.posts[slug];

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: locale,
    url: `${SITE_URL}${localePath(locale, `/insights/${slug}`)}`,
    image: `${SITE_URL}/images/og-image.jpg`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${localePath(locale, `/insights/${slug}`)}`,
    },
  };
}

/** Helper for embedding a schema object in JSX. */
export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}
