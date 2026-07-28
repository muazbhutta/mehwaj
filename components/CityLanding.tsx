// ============================================================================
// CityLanding — shared template for the per-city local SEO landing pages
// (/chartered-accountant-multan, -lahore, -karachi). Emits city LocalBusiness
// JSON-LD and reuses the site's service + contact data with local framing.
// ============================================================================

import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import Icon from "./Icons";
import {
  SERVICES,
  CONTACT,
  WHATSAPP_CTA_HREF,
  type City,
} from "@/lib/constants";
import { cityBusinessSchema, jsonLd } from "@/lib/schema";

export default function CityLanding({ city }: { city: City }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(cityBusinessSchema(city))}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow={`Chartered Accountants in ${city.name}`}
          title={`Chartered Accountant in ${city.name}`}
          subtitle={`Audit, tax, accounting, and financial advisory services in ${city.name}, ${city.region} — from MW & Co., Chartered Accountants.`}
          crumbs={[]}
        />

        <div className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-mw">
            {/* Intro */}
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <Reveal direction="right">
                <h2 className="font-serif text-3xl font-bold text-espresso sm:text-4xl">
                  Your trusted CA firm in{" "}
                  <span className="text-gold-gradient">{city.name}</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-coffee/90">
                  {city.blurb}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-coffee/90">
                  As {city.landmarks}, {city.name} is home to a diverse business
                  community — and MW &amp; Co. brings the same rigour, integrity,
                  and personal attention to every client here, whether you are an
                  individual taxpayer, a growing SME, or an established corporate.
                  Led personally by {" "}
                  <span className="font-semibold text-espresso">
                    Syed Muhammad Wajahat, ACA
                  </span>
                  , we deliver reliable financial solutions you can build on.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={WHATSAPP_CTA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    <Icon name="whatsapp" className="h-5 w-5" />
                    Consult a CA in {city.name}
                  </a>
                  <a href="/services" className="btn-outline">
                    View All Services
                  </a>
                </div>
              </Reveal>

              {/* Local contact card */}
              <Reveal direction="left" delay={0.1}>
                <div className="rounded-3xl border border-bronze/20 bg-espresso p-7 shadow-gold">
                  <div className="flex items-center gap-3">
                    <Icon name="map-pin" className="h-6 w-6 text-gold" />
                    <h3 className="font-serif text-xl font-bold text-cream">
                      MW &amp; Co. — {city.name}
                    </h3>
                  </div>
                  <div className="mt-5 space-y-4 text-sm">
                    <a
                      href={CONTACT.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-cream/80 transition-colors hover:text-champagne"
                    >
                      <Icon name="whatsapp" className="h-5 w-5 text-gold" />
                      {CONTACT.whatsapp.display}
                    </a>
                    <a
                      href={CONTACT.phone.href}
                      className="flex items-center gap-3 text-cream/80 transition-colors hover:text-champagne"
                    >
                      <Icon name="phone" className="h-5 w-5 text-gold" />
                      {CONTACT.phone.display}
                    </a>
                    <a
                      href={CONTACT.email.href}
                      className="flex items-center gap-3 text-cream/80 transition-colors hover:text-champagne"
                    >
                      <Icon name="mail" className="h-5 w-5 text-gold" />
                      {CONTACT.email.display}
                    </a>
                  </div>
                  <div className="mt-6 rounded-xl bg-coffee/50 p-4 text-center">
                    <p className="text-xs uppercase tracking-label text-champagne/80">
                      Serving
                    </p>
                    <p className="mt-1 font-serif text-cream">
                      {city.name} &amp; surrounding areas
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Services in this city */}
            <Reveal className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-espresso sm:text-3xl">
                Our services in {city.name}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SERVICES.map((s) => (
                  <div
                    key={s.slug}
                    className="flex items-start gap-3 rounded-2xl border border-bronze/20 bg-offwhite p-5 shadow-card"
                  >
                    <Icon name={s.icon} className="mt-0.5 h-6 w-6 shrink-0 text-bronze" />
                    <div>
                      <h3 className="font-serif text-base font-bold text-espresso">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-coffee/70">
                        {s.short}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
