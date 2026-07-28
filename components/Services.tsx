// ============================================================================
// Services — the 8 core offerings on a dark espresso stage. Gold line-icons,
// hover lift + gold glow. Wave divider transitions cream → brown at the top.
// ============================================================================

import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icons";
import WaveDivider from "./WaveDivider";
import { SERVICES, WHATSAPP_CTA_HREF } from "@/lib/constants";

const groupColor: Record<string, string> = {
  "Audit & Assurance": "bg-gold/15 text-champagne",
  Tax: "bg-bronze/25 text-champagne",
  Advisory: "bg-champagne/15 text-champagne",
};

export default function Services() {
  return (
    <section id="services" className="relative bg-espresso">
      {/* cream → brown wave */}
      <WaveDivider fill="#2B1B10" className="-mt-px bg-cream" />

      <div className="container-mw pb-20 pt-4 sm:pb-24 lg:pb-28">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-champagne/80">
            <span className="gold-diamond" /> Our Services{" "}
            <span className="gold-diamond" />
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-cream sm:text-5xl">
            Comprehensive <span className="text-gold-gradient">financial expertise</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">
            From audit and assurance to tax and advisory — everything your
            business needs, delivered under one trusted roof.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 4) * 0.08}
              as="article"
              className="group relative flex h-full flex-col rounded-2xl border border-bronze/25 bg-coffee/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-gold-lg"
            >
              {/* gold top accent on hover */}
              <span className="absolute inset-x-6 top-0 h-0.5 origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100" />

              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-espresso/60 text-gold ring-1 ring-bronze/30 transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-espresso">
                <Icon name={service.icon} className="h-7 w-7" />
              </span>

              <span
                className={`mt-5 inline-block w-max rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide ${groupColor[service.group]}`}
              >
                {service.group}
              </span>

              <h3 className="mt-3 font-serif text-xl font-bold text-cream">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
                {service.short}
              </p>

              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-champagne"
              >
                Learn more
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        {/* CTA row */}
        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-cream/80">
            Not sure which service you need?
          </p>
          <a
            href={WHATSAPP_CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Talk to an Expert
          </a>
        </Reveal>
      </div>
    </section>
  );
}
