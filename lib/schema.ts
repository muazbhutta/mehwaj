// ============================================================================
// JSON-LD structured data (Schema.org) for MW & Co., Chartered Accountants.
// Emitted via <script type="application/ld+json"> in the relevant pages so
// Google can show rich results (local business, FAQ, breadcrumbs).
// ============================================================================

import { SITE, SITE_URL, CONTACT, SOCIALS, SERVICES, FAQS } from "./constants";

const ORG_ID = `${SITE_URL}/#organization`;
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;

/**
 * Organization + AccountingService/LocalBusiness graph.
 * Rendered in the root layout so it applies site-wide.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/mw-logo.png`,
        },
        description: SITE.description,
        founder: {
          "@type": "Person",
          name: SITE.founder.name,
          jobTitle: `${SITE.founder.title}, ${SITE.founder.credential}`,
        },
        foundingDate: SITE.foundingYear,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT.phone.tel,
          email: CONTACT.email.display,
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["en", "ur"],
        },
        sameAs: SOCIALS.map((s) => s.href),
      },
      {
        "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
        "@id": LOCALBUSINESS_ID,
        name: SITE.name,
        image: `${SITE_URL}/images/og-image.jpg`,
        logo: `${SITE_URL}/images/mw-logo.png`,
        url: SITE_URL,
        description: SITE.description,
        telephone: CONTACT.phone.tel,
        email: CONTACT.email.display,
        priceRange: SITE.priceRange,
        parentOrganization: { "@id": ORG_ID },
        founder: {
          "@type": "Person",
          name: SITE.founder.name,
          jobTitle: `${SITE.founder.title}, ${SITE.founder.credential}`,
        },
        // One address entry per office (consistent NAP)
        address: CONTACT.cities.map((city) => ({
          "@type": "PostalAddress",
          addressLocality: city,
          addressCountry: "PK",
        })),
        areaServed: [
          ...CONTACT.cities.map((city) => ({ "@type": "City", name: city })),
          { "@type": "Country", name: "Pakistan" },
        ],
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
        knowsAbout: SERVICES.map((s) => s.title),
        makesOffer: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.short,
          },
        })),
        sameAs: SOCIALS.map((s) => s.href),
      },
    ],
  };
}

/** FAQPage schema - drives FAQ rich snippets in Google. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** BreadcrumbList schema for a given trail of { name, url } items. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** LocalBusiness schema scoped to a single city landing page. */
export function cityBusinessSchema(city: { name: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    "@id": `${SITE_URL}/chartered-accountant-${city.slug}#localbusiness`,
    name: `${SITE.name} - ${city.name}`,
    image: `${SITE_URL}/images/og-image.jpg`,
    url: `${SITE_URL}/chartered-accountant-${city.slug}`,
    telephone: CONTACT.phone.tel,
    email: CONTACT.email.display,
    priceRange: SITE.priceRange,
    description: `Chartered Accountants in ${city.name} - audit, tax, accounting, and financial advisory services from MW & Co.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressCountry: "PK",
    },
    areaServed: { "@type": "City", name: city.name },
    parentOrganization: { "@id": ORG_ID },
  };
}

/** Article/BlogPosting schema for a blog post. */
export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/images/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL,
    },
    publisher: { "@id": ORG_ID },
  };
}

/** Small helper for embedding a schema object into JSX safely. */
export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}
