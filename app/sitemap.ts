import type { MetadataRoute } from "next";
import {
  SITE_URL,
  SERVICE_SLUGS,
  CITY_SLUGS,
  POST_SLUGS,
  LEGAL_SLUGS,
} from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

/**
 * Every English and Arabic URL, each one carrying the language alternates so
 * Google can pair them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const en = getDictionary("en");

  const paths: { path: string; priority: number; lastModified: Date }[] = [
    { path: "/", priority: 1, lastModified: now },
    { path: "/services", priority: 0.9, lastModified: now },
    { path: "/secondments", priority: 0.9, lastModified: now },
    { path: "/about", priority: 0.7, lastModified: now },
    { path: "/insights", priority: 0.7, lastModified: now },
    { path: "/contact", priority: 0.8, lastModified: now },
    ...SERVICE_SLUGS.map((slug) => ({
      path: `/services/${slug}`,
      priority: 0.8,
      lastModified: now,
    })),
    ...CITY_SLUGS.map((slug) => ({
      path: `/chartered-accountant-${slug}`,
      priority: 0.8,
      lastModified: now,
    })),
    ...POST_SLUGS.map((slug) => ({
      path: `/insights/${slug}`,
      priority: 0.6,
      lastModified: new Date(en.posts[slug].isoDate),
    })),
    ...LEGAL_SLUGS.map((slug) => ({
      path: `/${slug}`,
      priority: 0.3,
      lastModified: now,
    })),
  ];

  const locales: Locale[] = ["en", "ar"];

  return paths.flatMap(({ path, priority, lastModified }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          en: `${SITE_URL}${localePath("en", path)}`,
          ar: `${SITE_URL}${localePath("ar", path)}`,
          "x-default": `${SITE_URL}${localePath("en", path)}`,
        },
      },
    }))
  );
}
