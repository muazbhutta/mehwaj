// ============================================================================
// The home page, assembled from its sections. The Arabic page leads with
// secondments, because its readers are Gulf firms, so the secondment band
// comes before the service cards there.
// ============================================================================

import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Audience from "./Audience";
import ServicesGrid from "./ServicesGrid";
import SecondmentBand from "./SecondmentBand";
import LeadershipGrid from "./LeadershipGrid";
import InsightCards from "./InsightCards";
import Faq from "./Faq";
import ContactSection from "./ContactSection";
import StepsBand from "../ui/StepsBand";
import Reveal from "../Reveal";
import { faqSchema, jsonLd } from "@/lib/schema";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/types";

export default function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const how = dict.home.howWeWork;

  const services = <ServicesGrid key="services" locale={locale} dict={dict} />;
  const secondments = (
    <SecondmentBand key="secondments" locale={locale} dict={dict} />
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(dict.home.faq.items))}
      />

      <Hero locale={locale} dict={dict} />
      <TrustBar dict={dict} />
      <Audience locale={locale} dict={dict} />

      {locale === "ar" ? [secondments, services] : [services, secondments]}

      <section className="bg-cream pt-16 sm:pt-20">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{how.eyebrow}</p>
            <h2 className="h-section">{how.title}</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-espresso/75">
              {how.intro}
            </p>
          </Reveal>
        </div>
        <div className="mt-12">
          <StepsBand steps={how.steps} checks={how.checks} />
        </div>
      </section>

      <LeadershipGrid locale={locale} dict={dict} />
      <InsightCards locale={locale} dict={dict} />
      <Faq dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
