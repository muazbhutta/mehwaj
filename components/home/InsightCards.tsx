// ============================================================================
// Three featured articles, each with a dark header strip carrying the tag.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { HOME_POST_SLUGS } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function InsightCards({
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
          <p className="eyebrow">{dict.home.insights.eyebrow}</p>
          <h2 className="h-section">{dict.home.insights.title}</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {HOME_POST_SLUGS.map((slug, i) => {
            const post = dict.posts[slug];
            return (
              <Reveal key={slug} delay={i * 0.06}>
                <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-bronze/25 bg-white">
                  <p className="dot-pattern bg-espresso px-6 py-4 font-sans text-xs font-semibold uppercase tracking-label text-gold">
                    {post.tag}
                  </p>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-sans text-sm text-espresso/60">
                      {post.date}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-espresso">
                      {post.title}
                    </h3>
                    <Link
                      href={localePath(locale, `/insights/${slug}`)}
                      className="link-gold mt-auto pt-5"
                    >
                      {dict.common.read}
                      <Arrow />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
