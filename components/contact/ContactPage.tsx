// ============================================================================
// Contact page: the two office cards and the map on the reading side, the
// form on the other, then the three step cards.
// ============================================================================

import { Suspense } from "react";
import Reveal from "../Reveal";
import Breadcrumb from "../ui/Breadcrumb";
import ContactFormWithService from "../forms/ContactFormWithService";
import { FIRM } from "@/lib/site";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

const MAP_SRC =
  "https://www.google.com/maps?q=Royal%20Orchard%2C%20Multan%2C%20Pakistan&output=embed";

export default function ContactPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const c = dict.contact;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: c.title, path: "/contact" },
          ])
        )}
      />

      <section className="section bg-cream">
        <div className="container-mw grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Breadcrumb
              items={[
                { label: dict.common.home, href: localePath(locale, "/") },
                { label: c.title },
              ]}
            />

            <Reveal>
              <p className="eyebrow mt-6">{c.eyebrow}</p>
              <h1 className="h-section">{c.title}</h1>
              <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-espresso/75">
                {c.intro}
              </p>

              <div className="mt-8 space-y-4">
                <div className="card px-6 py-5">
                  <p className="eyebrow">{c.saudiEyebrow}</p>
                  <p className="mt-2 font-sans text-base text-espresso">
                    <a href={FIRM.saudi.href} className="hover:text-bronze">
                      <bdi dir="ltr">{FIRM.saudi.display}</bdi>
                    </a>{" "}
                    <span aria-hidden>·</span>{" "}
                    <a href={FIRM.email.href} className="hover:text-bronze">
                      <bdi dir="ltr">{FIRM.email.display}</bdi>
                    </a>
                  </p>
                </div>

                <div className="card px-6 py-5">
                  <p className="eyebrow">{c.pakistanEyebrow}</p>
                  <p className="mt-2 font-sans text-base text-espresso">
                    {FIRM.address.short}
                  </p>
                  <p className="mt-1 font-sans text-base text-espresso">
                    <a
                      href={FIRM.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-bronze"
                    >
                      {c.whatsappLabel}{" "}
                      <bdi dir="ltr">{FIRM.whatsapp.display}</bdi>
                    </a>{" "}
                    <span aria-hidden>·</span>{" "}
                    <a href={FIRM.office.href} className="hover:text-bronze">
                      {c.officeLabel}{" "}
                      <bdi dir="ltr">{FIRM.office.display}</bdi>
                    </a>
                  </p>
                  <p className="mt-1 font-sans text-base text-espresso">
                    <a
                      href={FIRM.taxManager.href}
                      className="hover:text-bronze"
                    >
                      {c.taxManagerLabel}{" "}
                      <bdi dir="ltr">{FIRM.taxManager.display}</bdi>
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-bronze/25">
                <iframe
                  src={MAP_SRC}
                  title={c.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <Suspense fallback={null}>
              <ContactFormWithService locale={locale} dict={dict} />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-14">
        <div className="container-mw grid gap-6 lg:grid-cols-3">
          {c.steps.map((step, i) => (
            <div key={step.title} className="rounded-2xl bg-white/70 p-6">
              <h2 className="font-sans text-base font-semibold text-bronze">
                {i + 1} <span aria-hidden>·</span> {step.title}
              </h2>
              <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/75">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
