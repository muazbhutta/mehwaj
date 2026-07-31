// ============================================================================
// Leadership - "Our Leadership" section. Each leader is a compact profile card:
// a portrait + identity header, then bio and detail blocks below. Keeps cards
// tight and professional (no oversized floating photo).
// ============================================================================

import Image from "next/image";
import Reveal from "./Reveal";
import Icon from "./Icons";
import WaveDivider from "./WaveDivider";
import { LEADERS, type Leader, type LeaderDetail } from "@/lib/constants";

function DetailBlock({
  title,
  items,
}: {
  title: string;
  items: LeaderDetail[];
}) {
  return (
    <div>
      <h4 className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-wide text-espresso">
        <span className="h-5 w-1 rounded-full bg-gold-gradient" />
        {title}
      </h4>
      <ul className="mt-3.5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.label} className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-gradient text-espresso shadow-gold">
              <Icon name={it.icon} className="h-[17px] w-[17px]" />
            </span>
            <p className="text-[0.88rem] leading-snug text-coffee/85">
              <span className="font-semibold text-espresso">{it.label}:</span>{" "}
              {it.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LeaderProfile({ leader, index }: { leader: Leader; index: number }) {
  const reverse = index % 2 === 1; // alternate the portrait side
  return (
    <Reveal className="rounded-3xl border border-bronze/20 bg-offwhite p-6 shadow-card sm:p-8">
      {/* Header: portrait + identity + bio side by side */}
      <div
        className={`flex flex-col gap-6 sm:gap-8 ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div className="relative mx-auto aspect-[4/5] w-40 shrink-0 self-start overflow-hidden rounded-2xl bg-gradient-to-b from-champagne/50 to-cream shadow-gold ring-1 ring-bronze/25 sm:mx-0 sm:w-44">
          <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gold-gradient" />
          <Image
            src={leader.image}
            alt={`${leader.name} - ${leader.title}`}
            width={480}
            height={600}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-serif text-2xl font-bold text-espresso sm:text-3xl">
            {leader.name}
            {leader.credential && (
              <span className="text-gold-gradient"> {leader.credential}</span>
            )}
          </h3>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-label text-bronze">
            {leader.title}
          </p>
          <div className="mx-auto mt-3.5 h-1 w-16 rounded-full bg-gold-gradient sm:mx-0" />
          <div className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-coffee/90">
            {leader.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Detail blocks below */}
      <div className="mt-7 space-y-6 border-t border-bronze/15 pt-7">
        <DetailBlock title={leader.expertiseTitle} items={leader.expertise} />
        <DetailBlock title={leader.regionTitle} items={leader.regions} />
      </div>
    </Reveal>
  );
}

export default function Leadership() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream">
      {/* espresso → cream wave (from the Services section above) */}
      <WaveDivider fill="#F7F3EA" className="-mt-px bg-espresso" />

      {/* decorative gold radials */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-gold-radial opacity-40" />
        <div className="absolute -left-32 bottom-24 h-96 w-96 rounded-full bg-gold-radial opacity-30" />
      </div>

      <div className="container-mw relative pb-20 pt-6 sm:pb-24 lg:pb-28">
        {/* Heading */}
        <Reveal className="text-center">
          <h2 className="font-serif text-4xl font-bold text-espresso sm:text-5xl">
            Our <span className="text-gold-gradient">Leadership</span>
          </h2>
        </Reveal>

        {/* Profiles */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-8">
          {LEADERS.map((leader, i) => (
            <LeaderProfile key={leader.name} leader={leader} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
