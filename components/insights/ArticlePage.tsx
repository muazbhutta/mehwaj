// ============================================================================
// One article. The body is a list of paragraphs in the dictionary; a leading
// **marked** span becomes the bold lead-in of that paragraph.
// ============================================================================

import Link from "next/link";
import Icon from "../Icons";
import Breadcrumb from "../ui/Breadcrumb";
import RichText from "../ui/RichText";
import { getDictionary, localePath } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

export default function ArticlePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const dict = getDictionary(locale);
  const post = dict.posts[slug];
  const idx = dict.insightsIndex;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: idx.eyebrow, path: "/insights" },
            { name: post.title, path: `/insights/${slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(articleSchema(locale, slug))}
      />

      <article className="section bg-cream">
        <div className="container-mw max-w-3xl">
          <Breadcrumb
            items={[
              { label: dict.common.home, href: localePath(locale, "/") },
              { label: idx.eyebrow, href: localePath(locale, "/insights") },
              { label: post.tag },
            ]}
          />

          <p className="eyebrow mt-6">{post.tag}</p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-espresso sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 font-sans text-sm text-espresso/60">
            <time dateTime={post.isoDate}>{post.date}</time>{" "}
            <span aria-hidden>·</span> {post.readingTime}
          </p>

          <div className="mt-8 space-y-5">
            {post.body.map((para, i) => (
              <p
                key={i}
                className="font-sans text-base leading-[1.75] text-espresso/80"
              >
                <RichText text={para} />
              </p>
            ))}
          </div>

          <Link
            href={localePath(locale, "/insights")}
            className="link-gold mt-10"
          >
            <Icon name="arrow-right" className="h-4 w-4 rotate-180 rtl:rotate-0" />
            {idx.backToInsights}
          </Link>
        </div>
      </article>
    </>
  );
}
