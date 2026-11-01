// ============================================================================
// Leadership: four cards on a light beige band, each linking to the full
// profile on the about page.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import Avatar from "../ui/Avatar";
import { PEOPLE } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function LeadershipGrid({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="section bg-ivory">
      <div className="container-mw">
        <Reveal>
          <p className="eyebrow">{dict.home.leadership.eyebrow}</p>
          <h2 className="h-section">{dict.home.leadership.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {PEOPLE.map((person, i) => {
            const copy = dict.about.people[person.slug];
            return (
              <Reveal key={person.slug} delay={i * 0.06}>
                <div className="card card-lift flex h-full items-center gap-5">
                  <Avatar
                    image={person.image}
                    initials={person.initials}
                    name={copy.name}
                  />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-espresso">
                      {copy.name}
                    </h3>
                    <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-label text-bronze">
                      {copy.homeRole ?? copy.role}
                    </p>
                    <Link
                      href={localePath(locale, `/about#${person.slug}`)}
                      className="link-gold mt-3"
                    >
                      {dict.common.readFullProfile}
                      <Arrow />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
