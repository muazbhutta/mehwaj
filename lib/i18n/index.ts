import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { ar } from "./ar";

export type { Dictionary, Locale } from "./types";

export const LOCALES: Locale[] = ["en", "ar"];

const DICTIONARIES: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/**
 * Turns a language neutral path such as "/services" into the path for a
 * locale: "/services" in English, "/ar/services" in Arabic.
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/ar";
  return `/ar${path}`;
}

/** The same page in the other language, used by the EN / عربي switch. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}

/**
 * `alternates` for the Next.js Metadata API, so Google sees the language pairs.
 * `path` is the language neutral path, for example "/services/income-tax".
 */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      en: localePath("en", path),
      ar: localePath("ar", path),
      "x-default": localePath("en", path),
    },
  };
}
