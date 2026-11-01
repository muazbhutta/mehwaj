"use client";

// ============================================================================
// Header: solid white bar with the logo lockup, the page links, the language
// switch and the gold consultation button. Mobile collapses to a hamburger.
// ============================================================================

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icons";
import { FIRM, whatsappHref } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

/** Removes the "/ar" prefix so both languages can be compared on one path. */
function neutralPath(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  return pathname || "/";
}

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const here = neutralPath(pathname);
  const otherHref = locale === "en" ? localePath("ar", here) : here;

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? here === "/" : here === href || here.startsWith(`${href}/`);

  const consultHref = whatsappHref(dict.common.whatsappConsultMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-bronze/20 bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        {dict.common.skipToContent}
      </a>

      <div className="container-mw flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo locale={locale} dict={dict} />

        <nav
          aria-label={dict.common.menu}
          className="hidden items-center gap-7 xl:flex"
        >
          {dict.nav.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-sans text-[0.95rem] transition-colors ${
                isActive(item.href)
                  ? "border-b-2 border-gold pb-1 text-bronze"
                  : "text-espresso hover:text-bronze"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={otherHref}
            lang={locale === "en" ? "ar" : "en"}
            aria-label={dict.common.languageSwitchLabel}
            className="hidden rounded-full border border-bronze/40 px-3 py-1.5 font-sans text-sm text-espresso transition-colors hover:border-bronze hover:bg-bronze/10 sm:block"
          >
            {locale === "en" ? (
              <>
                EN <span className="text-bronze/60">|</span>{" "}
                <span lang="ar">عربي</span>
              </>
            ) : (
              <>
                <span lang="ar">عربي</span>{" "}
                <span className="text-bronze/60">|</span> EN
              </>
            )}
          </Link>

          <a
            href={consultHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden px-5 py-3 text-xs md:inline-flex"
          >
            {dict.common.bookConsultation}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.common.close : dict.common.menu}
            className="rounded-full border border-bronze/30 p-2.5 text-espresso xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-bronze/20 bg-white xl:hidden"
        >
          <nav
            aria-label={dict.common.menu}
            className="container-mw flex flex-col py-4"
          >
            {dict.nav.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-bronze/15 py-3 font-sans ${
                  isActive(item.href) ? "text-bronze" : "text-espresso"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={otherHref}
                lang={locale === "en" ? "ar" : "en"}
                aria-label={dict.common.languageSwitchLabel}
                className="pill"
              >
                {locale === "en" ? "عربي" : "EN"}
              </Link>
              <a
                href={consultHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-5 py-3 text-xs"
              >
                {dict.common.bookConsultation}
              </a>
            </div>

            <p className="mt-4 font-sans text-sm text-espresso/70">
              <bdi dir="ltr">{FIRM.whatsapp.display}</bdi>
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
