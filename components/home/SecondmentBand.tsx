// ============================================================================
// Espresso band with the secondment pitch and the four jurisdiction tiles.
// The tiles carry the only countries the team has actually worked in.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { JURISDICTION_CODES, JURISDICTION_LABELS } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function SecondmentBand({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const band = dict.home.secondmentBand;
  const items = dict.secondments.experience.items;

  return (
    <section className="dot-pattern bg-espresso">
      <div className="container-mw grid gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <Reveal>
          <p className="eyebrow-light">{band.eyebrow}</p>
          <h2 className="h-section-light">{band.title}</h2>
          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-cream/75">
            {band.text}
          </p>
          <p className="mt-5 font-sans text-sm text-champagne">
            {band.rolesLine}
          </p>
          <Link
            href={localePath(locale, "/secondments")}
            className="btn-gold mt-8"
          >
            {dict.common.viewSecondments}
            <Arrow />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {JURISDICTION_CODES.map((code) => (
              <li
                key={code}
                className="flex items-center gap-4 rounded-2xl border border-champagne/20 bg-white/5 p-4"
              >
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold font-sans text-xs font-bold text-espresso"
                >
                  {JURISDICTION_LABELS[code]}
                </span>
                <span className="font-sans text-sm text-cream">
                  {items[code].name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
