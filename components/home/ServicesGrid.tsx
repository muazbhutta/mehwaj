// ============================================================================
// Four service line cards, each a list of links to the service pages.
// The last item of the accounting card points at the secondments page.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { HOME_SERVICE_LINES, SERVICE_GROUPS } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function ServicesGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="section bg-cream">
      <div className="container-mw">
        <Reveal>
          <p className="eyebrow">{dict.home.services.eyebrow}</p>
          <h2 className="h-section">{dict.home.services.title}</h2>
          <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-espresso/75">
            {dict.home.services.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_GROUPS.map((group, i) => (
            <Reveal key={group} delay={i * 0.06}>
              <div className="card h-full p-6">
                <h3 className="eyebrow">{dict.common.serviceGroups[group]}</h3>
                <ul className="mt-4">
                  {HOME_SERVICE_LINES[group].map((slug) => {
                    const isSecondment = slug === "finance-secondment";
                    const label = isSecondment
                      ? dict.servicesIndex.financeSecondment.title
                      : dict.services[slug].title;
                    const href = isSecondment
                      ? localePath(locale, "/secondments")
                      : localePath(locale, `/services/${slug}`);

                    return (
                      <li key={slug} className="border-t border-bronze/20">
                        <Link
                          href={href}
                          className="group flex items-center justify-between gap-3 py-3 font-sans text-[0.95rem] text-espresso transition-colors hover:text-bronze"
                        >
                          <span>{label}</span>
                          <Arrow className="h-4 w-4 shrink-0 text-bronze" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
