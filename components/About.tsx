// ============================================================================
// About — centered, stacked layout: intro text → row of stat/trust boxes →
// cities banner → centered partner card.
// ============================================================================

import Reveal from "./Reveal";
import Icon from "./Icons";
import WaveDivider from "./WaveDivider";
import { SITE, STATS, CONTACT } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="relative bg-cream">
      {/* brown → cream wave (from the Why-Us section above) */}
      <WaveDivider fill="#F7F3EA" className="-mt-px bg-coffee" />

      <div className="container-mw pb-20 pt-10 sm:pb-24 lg:pb-28">
        {/* ---- Centered intro text ---- */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-diamond" /> About MW &amp; Co.
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-espresso sm:text-5xl">
            A Chartered Accountancy firm built on{" "}
            <span className="text-gold-gradient">trust</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-coffee/90">
            {SITE.name} is a professional Chartered Accountancy practice
            delivering reliable financial solutions and strategic insight across
            Pakistan. From individuals and freelancers to startups, SMEs, and
            corporate clients, we help businesses grow with confidence.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-coffee/90">
            Our mission is simple — combine technical excellence with genuine
            care for our clients, guided always by our core values of{" "}
            <span className="font-semibold text-espresso">
              Quality, Integrity, and Practical Solutions
            </span>
            .
          </p>
        </Reveal>

        {/* ---- Stat / trust boxes in a row ---- */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-bronze/20 bg-espresso p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" />
                <p className="font-serif text-4xl font-bold text-gold-gradient sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-wide text-cream">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-champagne/70">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---- Cities banner below the boxes ---- */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-bronze/20 bg-gold-gradient p-4 text-center shadow-gold">
            <Icon name="map-pin" className="h-5 w-5 text-espresso" />
            <p className="font-sans text-sm font-semibold uppercase tracking-wide text-espresso">
              {CONTACT.cities.join("  •  ")}
            </p>
          </div>
        </Reveal>

        {/* ---- Centered partner card ---- */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-bronze/20 bg-offwhite p-6 text-center shadow-card sm:p-8">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-espresso">
              <Icon name="medal" className="h-7 w-7" />
            </span>
            <p className="mt-4 font-serif text-xl font-bold text-espresso">
              {SITE.founder.name},{" "}
              <span className="text-bronze">{SITE.founder.credential}</span>
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-bronze">
              {SITE.founder.title}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-coffee/80">
              A qualified Associate Chartered Accountant (ICAP) leading every
              engagement personally — so you always deal directly with a seasoned
              professional invested in your success.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
