// ============================================================================
// Metadata helpers. Every page builds its title, description, canonical and
// language alternates from its dictionary entry through `pageMetadata`.
// ============================================================================

import type { Metadata } from "next";
import { SITE_URL, FIRM } from "./site";
import { alternatesFor, getDictionary } from "./i18n";
import type { Locale, MetaCopy } from "./i18n/types";

/** The real dimensions of public/images/og-image.jpg. */
export const OG_IMAGE = {
  url: "/images/og-image.jpg",
  width: 900,
  height: 1600,
} as const;

const KEYWORDS: Record<Locale, string[]> = {
  en: [
    "chartered accountants Pakistan",
    "chartered accountant Multan",
    "chartered accountant Lahore",
    "chartered accountant Karachi",
    "chartered accountant Islamabad",
    "audit firm Pakistan",
    "income tax filing Pakistan",
    "sales tax filing Pakistan",
    "SECP compliance",
    "IFRS 18 Pakistan",
    "audit secondment GCC",
    "audit secondment Saudi Arabia",
    "audit secondment UAE",
    "audit secondment Qatar",
    "audit secondment Kuwait",
    "audit secondment Bahrain",
    "audit secondment Oman",
    "outsourced accounting GCC",
    "outsourced accounting Dubai",
    "remote audit support Gulf firms",
    "zakat and VAT Saudi Arabia",
    "offshore accounting team Pakistan",
    "international clients accounting Pakistan",
  ],
  ar: [
    "الإعارة المهنية للمدققين",
    "محاسبون قانونيون",
    "محاسب قانوني",
    "تدقيق",
    "الزكاة وضريبة القيمة المضافة",
    "محاسبون قانونيون في باكستان",
    "إعارة مدققين في السعودية",
    "إعارة مدققين في الإمارات",
    "إعارة مدققين في قطر",
    "إعارة مدققين في الكويت",
    "إعارة مدققين في البحرين",
    "إعارة مدققين في سلطنة عمان",
    "المحاسبة بالإسناد الخارجي في الخليج",
    "دعم التدقيق عن بُعد",
    "الامتثال لدى SECP",
    "IFRS 18",
  ],
};


/**
 * Builds the Metadata object for one page.
 * `path` is the language neutral path, for example "/services/income-tax".
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  meta: MetaCopy
): Metadata {
  const dict = getDictionary(locale);
  const alternates = alternatesFor(locale, path);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: FIRM.fullName,
    keywords: KEYWORDS[locale],
    authors: [{ name: FIRM.fullName }],
    creator: FIRM.fullName,
    publisher: FIRM.fullName,
    category: "finance",
    alternates,
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_PK",
      alternateLocale: locale === "ar" ? "en_PK" : "ar_SA",
      url: alternates.canonical,
      siteName: dict.common.firmFullName,
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: OG_IMAGE.url,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: dict.common.firmFullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico?v=3", sizes: "any" },
        { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
  };
}
