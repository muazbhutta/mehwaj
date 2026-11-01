// ============================================================================
// Service page template. All 14 service pages are generated from this one
// component and the service entry in the dictionary.
// ============================================================================

import Link from "next/link";
import Icon, { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { serviceGroupOf } from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, serviceSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

export default function ServicePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const dict = getDictionary(locale);
  const service = dict.services[slug];
  const group = serviceGroupOf(slug);
  const groupLabel = group ? dict.common.serviceGroups[group] : "";
  const idx = dict.servicesIndex;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: idx.title, path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(serviceSchema(locale, slug))}
      />

      <section className="section bg-cream">
        <div className="container-mw grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="eyebrow">{groupLabel}</p>
              <h1 className="mt-3 font-serif text-3xl font-bold text-espresso sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-espresso/75 sm:text-lg">
                {service.intro}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-12 font-sans text-lg font-semibold text-espresso">
                {idx.whoFor}
              </h2>
              <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-espresso/75">
                {service.whoFor}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-10 font-sans text-lg font-semibold text-espresso">
                {idx.howItWorks}
              </h2>
              <ol className="mt-4 flex flex-wrap gap-3">
                {service.steps.map((step, i) => (
                  <li
                    key={step}
                    className="rounded-xl bg-ivory px-4 py-3 font-sans text-sm text-espresso"
                  >
                    <span className="text-bronze">{i + 1}.</span> {step}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-10 font-sans text-lg font-semibold text-espresso">
                {idx.weNeed}
              </h2>
              <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-espresso/75">
                {service.weNeed}
              </p>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="card">
              <h2 className="eyebrow">{idx.whatYouGet}</h2>
              <ul className="mt-4">
                {service.youGet.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-bronze/20 py-4 first:border-0"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-bronze"
                    />
                    <span className="font-sans text-sm leading-relaxed text-espresso">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dot-pattern mt-6 rounded-2xl bg-espresso p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-cream">
                {service.ctaHeading}
              </h2>
              <p className="mt-3 font-sans text-sm leading-relaxed text-cream/75">
                {service.ctaText}
              </p>
              <Link
                href={localePath(locale, `/contact?service=${slug}`)}
                className="btn-gold mt-6"
              >
                {dict.common.sendRequest}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
