// ============================================================================
// Services index: the 14 service pages grouped into the four service lines,
// plus finance secondment, which links to the secondments page.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import PageBand from "../ui/PageBand";
import { SERVICES, SERVICE_GROUPS } from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

/** First line of the intro, cut at a word boundary. */
function firstLine(text: string, max = 92): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export default function ServicesIndexPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const idx = dict.servicesIndex;

  const entries = (group: (typeof SERVICE_GROUPS)[number]) => {
    const list = SERVICES.filter((s) => s.group === group).map((s) => ({
      key: s.slug,
      title: dict.services[s.slug].title,
      intro: dict.services[s.slug].intro,
      href: localePath(locale, `/services/${s.slug}`),
    }));

    if (group === "accounting") {
      list.push({
        key: "finance-secondment",
        title: idx.financeSecondment.title,
        intro: idx.financeSecondment.intro,
        href: localePath(locale, "/secondments"),
      });
    }
    return list;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: idx.title, path: "/services" },
          ])
        )}
      />

      <PageBand title={idx.title} intro={idx.intro} />

      <section className="section bg-cream">
        <div className="container-mw grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_GROUPS.map((group, gi) => (
            <Reveal key={group} delay={gi * 0.06}>
              <div className="card card-lift h-full p-6">
                <h2 className="eyebrow">
                  <span className="text-espresso/40">
                    {String(gi + 1).padStart(2, "0")}
                  </span>{" "}
                  <span aria-hidden>·</span> {dict.common.serviceGroups[group]}
                </h2>
                <ul className="mt-4 space-y-5">
                  {entries(group).map((entry) => (
                    <li
                      key={entry.key}
                      className="border-t border-bronze/20 pt-5 first:border-0 first:pt-0"
                    >
                      <Link href={entry.href} className="group block">
                        <h3 className="font-sans text-base font-semibold text-espresso transition-colors group-hover:text-bronze">
                          {entry.title}
                        </h3>
                        <p className="mt-1.5 font-sans text-sm leading-relaxed text-espresso/70">
                          {firstLine(entry.intro)}
                        </p>
                        <span className="link-gold mt-2.5">
                          {dict.common.learnMore}
                          <Arrow />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-14">
        <div className="container-mw flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-espresso sm:text-3xl">
              {idx.closing.title}
            </h2>
            <p className="mt-2 font-sans text-base text-espresso/75">
              {idx.closing.text}
            </p>
          </div>
          <Link href={localePath(locale, "/contact")} className="btn-gold">
            {idx.closing.cta}
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
