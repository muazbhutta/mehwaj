// TODO: client to review legal wording
// ============================================================================
// Shared layout for the privacy policy, terms of use and disclaimer.
// ============================================================================

import Breadcrumb from "../ui/Breadcrumb";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { LegalSlug } from "@/lib/site";
import type { Locale } from "@/lib/i18n/types";

export default function LegalPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: LegalSlug;
}) {
  const dict = getDictionary(locale);
  const page = dict.legal[slug];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: page.title, path: `/${slug}` },
          ])
        )}
      />

      <section className="section bg-cream">
        <div className="container-mw max-w-3xl">
          <Breadcrumb
            items={[
              { label: dict.common.home, href: localePath(locale, "/") },
              { label: page.title },
            ]}
          />

          <p className="eyebrow mt-6">{page.eyebrow}</p>
          <h1 className="h-section">{page.title}</h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-espresso/75">
            {page.intro}
          </p>
          <p className="mt-2 font-sans text-sm text-espresso/55">
            {page.updated}
          </p>

          <div className="mt-10 space-y-9">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-xl font-bold text-espresso sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.body.map((para, i) => (
                    <p
                      key={i}
                      className="font-sans text-base leading-relaxed text-espresso/75"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
