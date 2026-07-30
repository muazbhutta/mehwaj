// ============================================================================
// WhyUs — dark banner "COMMITMENT TO EXCELLENCE" + the firm's core values.
// ============================================================================

import Reveal from "./Reveal";
import Icon from "./Icons";
import WaveDivider from "./WaveDivider";
import { VALUES } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative -mt-px overflow-hidden bg-coffee">
      {/* cream → brown wave (from the FAQ section above) */}
      <WaveDivider fill="#4A2E1C" className="bg-cream" />

      {/* subtle radial accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-radial opacity-30" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-radial opacity-25" />
      </div>

      <div className="container-mw relative pb-14 pt-6 sm:pb-16 lg:pb-20">
        {/* Banner */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="flex justify-center">
            <Icon name="star" className="h-9 w-9 text-gold" />
          </span>
          <p className="mt-4 font-script text-3xl text-champagne sm:text-4xl">
            Commitment to Excellence
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold uppercase tracking-wide text-cream sm:text-5xl">
            Your success is <span className="text-gold-gradient">our priority</span>
          </h2>
          <div className="mx-auto mt-6 max-w-md">
            <div className="gold-rule" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            We do not just balance the books — we build lasting relationships
            founded on reliability, discretion, and a genuine commitment to
            helping you succeed.
          </p>
        </Reveal>

        {/* Value points */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.title}
              delay={(i % 4) * 0.08}
              className="group flex flex-col items-center rounded-2xl border border-bronze/25 bg-espresso/50 p-7 text-center transition-all duration-300 hover:border-gold/50 hover:bg-espresso/80"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-bronze/40 bg-espresso text-gold transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-espresso">
                <Icon name={value.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-cream">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {value.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
