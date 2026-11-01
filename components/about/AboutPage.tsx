// ============================================================================
// About page: the firm, its values and the people. Each person card carries
// its slug as an id, so the home page leadership cards can link straight in.
// ============================================================================

import Reveal from "../Reveal";
import Avatar from "../ui/Avatar";
import Breadcrumb from "../ui/Breadcrumb";
import RichText from "../ui/RichText";
import { PEOPLE } from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

export default function AboutPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: a.h1, path: "/about" },
          ])
        )}
      />

      {/* F1. Hero */}
      <section className="dot-pattern bg-espresso">
        <div className="container-mw grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr] lg:gap-14 lg:py-16">
          <div>
            <Breadcrumb
              variant="light"
              items={[
                { label: dict.common.home, href: localePath(locale, "/") },
                { label: a.h1 },
              ]}
            />
            <p className="eyebrow-light mt-5">{a.eyebrow}</p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
              {a.h1}
            </h1>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-cream/75 sm:text-lg">
              {a.intro}
            </p>
          </div>

          <ul className="flex flex-wrap content-center gap-3">
            {a.values.map((value) => (
              <li key={value} className="pill-light">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* F2. Our people */}
      <section className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{a.peopleEyebrow}</p>
            <h2 className="h-section">{a.peopleTitle}</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PEOPLE.map((person, i) => {
              const copy = a.people[person.slug];
              return (
                <Reveal key={person.slug} delay={i * 0.06}>
                  <article
                    id={person.slug}
                    className="card h-full scroll-mt-28"
                  >
                    <div className="flex items-start gap-5">
                      <Avatar
                        image={person.image}
                        initials={person.initials}
                        name={copy.name}
                        size="lg"
                      />
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-espresso">
                          {copy.name}
                        </h3>
                        {copy.latinName && (
                          <p
                            dir="ltr"
                            className="mt-1 font-sans text-sm text-espresso/55"
                          >
                            {copy.latinName}
                          </p>
                        )}
                        <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-label text-bronze">
                          {copy.role}
                        </p>
                        <p className="mt-1.5 font-sans text-sm text-espresso/70">
                          {copy.subLine}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {copy.bio.map((para, bi) => (
                        <p
                          key={bi}
                          className="font-sans text-base leading-relaxed text-espresso/75"
                        >
                          <RichText text={para} />
                        </p>
                      ))}
                    </div>

                    {person.phoneHref && person.phoneDisplay && (
                      <p className="mt-5">
                        <a
                          href={person.phoneHref}
                          className="font-sans text-sm font-semibold text-bronze hover:text-espresso"
                        >
                          <bdi dir="ltr">{person.phoneDisplay}</bdi>
                        </a>
                      </p>
                    )}

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {copy.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg bg-ivory px-3 py-1.5 font-sans text-xs text-espresso"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* F3. Note */}
          <Reveal>
            <p className="mt-10 rounded-2xl border border-bronze/25 bg-ivory p-6 font-sans text-sm leading-relaxed text-espresso/80">
              {a.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
