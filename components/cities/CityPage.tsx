// ============================================================================
// City landing page. The firm has one office, in Multan: these pages describe
// how each city is served from it and never claim a local address.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import PageBand from "../ui/PageBand";
import { FIRM, whatsappHref, type CitySlug } from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, cityBusinessSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

const MAP_SRC =
  "https://www.google.com/maps?q=Royal%20Orchard%2C%20Multan%2C%20Pakistan&output=embed";

export default function CityPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: CitySlug;
}) {
  const dict = getDictionary(locale);
  const city = dict.cities[slug];
  const path = `/chartered-accountant-${slug}`;
  const crumbLabel = dict.common.cityCrumb.replace("{city}", city.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: crumbLabel, path },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(cityBusinessSchema(locale, slug))}
      />

      <PageBand
        crumbs={[
          { label: dict.common.home, href: localePath(locale, "/") },
          { label: crumbLabel },
        ]}
        title={city.h1}
      />

      <section className="section bg-cream">
        <div className="container-mw grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            {city.intro.map((para, i) => (
              <p
                key={i}
                className={`max-w-2xl font-sans text-base leading-relaxed ${
                  i === 0 ? "text-espresso" : "mt-5 text-espresso/75"
                }`}
              >
                {para}
              </p>
            ))}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {city.chips.map((chip) => (
                <li key={chip.label}>
                  <Link
                    href={localePath(locale, `/services/${chip.slug}`)}
                    className="flex items-center justify-between gap-3 rounded-xl border border-bronze/30 bg-white px-4 py-3 font-sans text-sm text-espresso transition-colors hover:border-bronze hover:text-bronze"
                  >
                    <span>{chip.label}</span>
                    <Arrow className="h-4 w-4 shrink-0 text-bronze" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card">
              <p className="eyebrow">{city.cardEyebrow}</p>
              <div className="mt-4 space-y-1.5 font-sans text-sm text-espresso/80">
                {city.cardLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-5 space-y-1.5 font-sans text-sm text-espresso">
                <p>
                  <a
                    href={FIRM.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bronze"
                  >
                    {dict.contact.whatsappLabel}{" "}
                    <bdi dir="ltr">{FIRM.whatsapp.display}</bdi>
                  </a>
                </p>
                <p>
                  <a href={FIRM.office.href} className="hover:text-bronze">
                    {dict.contact.officeLabel}{" "}
                    <bdi dir="ltr">{FIRM.office.display}</bdi>
                  </a>
                </p>
                <p>
                  <a href={FIRM.email.href} className="hover:text-bronze">
                    <bdi dir="ltr">{FIRM.email.display}</bdi>
                  </a>
                </p>
              </div>

              <a
                href={whatsappHref(dict.common.whatsappConsultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6"
              >
                {dict.common.consultCta}
                <Arrow />
              </a>

              {slug === "multan" && (
                <div className="mt-6 overflow-hidden rounded-xl border border-bronze/25">
                  <iframe
                    src={MAP_SRC}
                    title={dict.contact.mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full border-0"
                  />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
