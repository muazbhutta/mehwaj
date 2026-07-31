import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import { SERVICES, SERVICE_GROUPS, WHATSAPP_CTA_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services - Audit, Tax & Advisory",
  description:
    "Explore MW & Co.'s chartered accountancy services: external & internal audit, tax consultation, FBR return filing, accounting & bookkeeping, business valuation, IFRS advisory, and financial advisory in Multan, Lahore & Karachi.",
  alternates: { canonical: "/services" },
};

const groupIntro: Record<string, string> = {
  "Audit & Assurance":
    "Independent assurance that builds confidence with shareholders, lenders, and regulators.",
  Tax: "Plan, comply, and file with confidence - optimising your position while staying fully compliant with the FBR.",
  Advisory:
    "Strategic financial guidance and reporting expertise to help your business make confident decisions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="What We Do"
          title="Our Services"
          subtitle="A full spectrum of chartered accountancy services - audit and assurance, tax, and advisory - delivered with rigour and a genuine commitment to your success."
          crumbs={[]}
        />

        <div className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="container-mw space-y-16">
            {SERVICE_GROUPS.map((group) => {
              const items = SERVICES.filter((s) => s.group === group);
              return (
                <section key={group}>
                  <Reveal className="max-w-2xl">
                    <p className="eyebrow flex items-center gap-3">
                      <span className="gold-diamond" /> {group}
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-bold text-espresso sm:text-4xl">
                      {group}
                    </h2>
                    <p className="mt-3 text-lg text-coffee/80">{groupIntro[group]}</p>
                  </Reveal>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {items.map((service, i) => (
                      <Reveal
                        key={service.slug}
                        delay={(i % 2) * 0.1}
                        as="article"
                        className="group flex gap-5 rounded-2xl border border-bronze/20 bg-offwhite p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold"
                      >
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-espresso">
                          <Icon name={service.icon} className="h-7 w-7" />
                        </span>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-espresso">
                            {service.title}
                          </h3>
                          <p className="mt-2 leading-relaxed text-coffee/85">
                            {service.long}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* CTA */}
            <Reveal className="overflow-hidden rounded-3xl bg-espresso p-8 text-center shadow-gold sm:p-12">
              <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl">
                Ready to <span className="text-gold-gradient">get started?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/70">
                Book a free consultation and let&apos;s discuss how MW &amp; Co.
                can support your business.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_CTA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Book a Consultation
                </a>
                <a href="/#contact" className="btn-outline-light w-full sm:w-auto">
                  Contact Us
                </a>
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
