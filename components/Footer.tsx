// ============================================================================
// Footer: espresso band with the brand lockup, four link columns and the
// legal bottom bar. No skyline artwork, no social icons (the social profiles
// are published in the JSON-LD sameAs instead).
// ============================================================================

import Link from "next/link";
import Logo from "./Logo";
import { FIRM } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

function Column({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-label text-cream">
        {heading}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = String(new Date().getFullYear());
  const f = dict.footer;

  return (
    <footer className="bg-espresso text-cream">
      <div className="container-mw grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.3fr] lg:gap-8">
        <div>
          <Logo locale={locale} dict={dict} variant="light" />
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-cream/75">
            {f.blurb}
          </p>
          <p className="mt-4 font-script text-xl text-champagne">
            {dict.common.tagline}
          </p>
        </div>

        <Column heading={f.firmHeading}>
          {f.firmLinks.map((l) => (
            <li key={`${l.href}-${l.label}`}>
              <Link
                href={localePath(locale, l.href)}
                className="font-sans text-sm text-cream/80 transition-colors hover:text-champagne"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </Column>

        <Column heading={f.servicesHeading}>
          {f.serviceLinks.map((l) => (
            <li key={`${l.href}-${l.label}`}>
              <Link
                href={localePath(locale, l.href)}
                className="font-sans text-sm text-cream/80 transition-colors hover:text-champagne"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </Column>

        <Column heading={f.secondmentsHeading}>
          {f.secondmentLinks.map((l) => (
            <li key={`${l.href}-${l.label}`}>
              <Link
                href={localePath(locale, l.href)}
                className="font-sans text-sm text-cream/80 transition-colors hover:text-champagne"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </Column>

        <Column heading={f.contactHeading}>
          <li className="font-sans text-sm text-cream/80">
            <a
              href={FIRM.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-champagne"
            >
              {f.whatsappLabel} <bdi dir="ltr">{FIRM.whatsapp.display}</bdi>
            </a>
          </li>
          <li className="font-sans text-sm text-cream/80">
            <a
              href={FIRM.office.href}
              className="transition-colors hover:text-champagne"
            >
              {f.officeLabel} <bdi dir="ltr">{FIRM.office.display}</bdi>
            </a>
          </li>
          <li className="font-sans text-sm text-cream/80">
            <a
              href={FIRM.saudi.href}
              className="transition-colors hover:text-champagne"
            >
              {f.ksaLabel} <bdi dir="ltr">{FIRM.saudi.display}</bdi>
            </a>
          </li>
          <li className="font-sans text-sm text-cream/80">
            <a
              href={FIRM.email.href}
              className="transition-colors hover:text-champagne"
            >
              <bdi dir="ltr">{FIRM.email.display}</bdi>
            </a>
          </li>
          <li className="font-sans text-sm leading-relaxed text-cream/80">
            {FIRM.address.short}
          </li>
        </Column>
      </div>

      <div className="border-t border-champagne/15">
        <div className="container-mw flex flex-col gap-3 py-5 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans">{f.copyright.replace("{year}", year)}</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans">
            {f.legalLinks.map((l, i) => (
              <span key={l.href} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden>·</span>}
                <Link
                  href={localePath(locale, l.href)}
                  className="transition-colors hover:text-champagne"
                >
                  {l.label}
                </Link>
              </span>
            ))}
            <span aria-hidden>·</span>
            <a
              href={FIRM.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-champagne"
            >
              {f.linkedin}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
