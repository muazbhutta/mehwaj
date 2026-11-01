// ============================================================================
// Insights index: every article, newest practical updates first, then the
// three earlier posts that moved across from the old blog.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { POST_SLUGS } from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

export default function InsightsIndexPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const idx = dict.insightsIndex;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: idx.eyebrow, path: "/insights" },
          ])
        )}
      />

      <section className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{idx.eyebrow}</p>
            <h1 className="h-section">{idx.title}</h1>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-espresso/75">
              {idx.intro}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {POST_SLUGS.map((slug, i) => {
              const post = dict.posts[slug];
              return (
                <Reveal key={slug} delay={(i % 2) * 0.06}>
                  <article className="flex h-full overflow-hidden rounded-2xl border border-bronze/25 bg-white">
                    <div className="dot-pattern hidden w-36 shrink-0 flex-col justify-end bg-espresso p-4 sm:flex">
                      <p className="font-sans text-xs font-semibold uppercase tracking-label text-gold">
                        {post.tag}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-sans text-sm text-espresso/60">
                        <span className="sm:hidden">{post.tag} · </span>
                        {post.date} <span aria-hidden>·</span>{" "}
                        {post.readingTime}
                      </p>
                      <h2 className="mt-2 font-serif text-xl font-bold leading-snug text-espresso sm:text-2xl">
                        {post.title}
                      </h2>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/70">
                        {post.summary}
                      </p>
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
    </>
  );
}
