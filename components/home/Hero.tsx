// ============================================================================
// Home hero: cream band, copy on the reading side, image or brand panel on the
// other. Drop a real photo of the team, the office or a set of working papers
// at public/images/office.jpg and it replaces the brand panel automatically.
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { FIRM } from "@/lib/site";
import { publicFileExists } from "@/lib/assets";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

// A real photo of the team, the office or a set of working papers belongs at
// public/images/office.jpg. Until one is supplied the hero falls back to the
// photo the earlier site used, and then to the brand panel.
const OFFICE_IMAGE = "/images/office.jpg";
const FALLBACK_IMAGE = "/images/team.jpg";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const hero = dict.home.hero;
  const hasOfficePhoto = publicFileExists("images/office.jpg");
  const hasFallbackPhoto = publicFileExists("images/team.jpg");
  const photo = hasOfficePhoto
    ? { src: OFFICE_IMAGE, alt: hero.imageAlt }
    : hasFallbackPhoto
      ? { src: FALLBACK_IMAGE, alt: hero.imageAltFallback }
      : null;

  // The Arabic home page leads with secondments, so its buttons differ.
  const primaryHref =
    locale === "ar"
      ? localePath(locale, "/secondments#request")
      : localePath(locale, "/services");
  const secondaryHref =
    locale === "ar" ? FIRM.saudi.href : localePath(locale, "/secondments");

  return (
    <section className="bg-cream">
      <div className="container-mw grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <Reveal className="stagger">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-5 font-serif text-[2.1rem] font-bold leading-[1.15] text-espresso sm:text-5xl lg:text-[3.4rem]">
            {hero.h1}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-espresso/75 sm:text-lg">
            {hero.paragraph}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="btn-gold">
              {hero.primaryCta}
              <Arrow />
            </Link>
            {locale === "ar" ? (
              <a href={secondaryHref} className="btn-outline">
                {hero.secondaryCta}
                <bdi dir="ltr">{FIRM.saudi.display}</bdi>
              </a>
            ) : (
              <Link href={secondaryHref} className="btn-outline">
                {hero.secondaryCta}
                <Arrow />
              </Link>
            )}
          </div>

          {hero.chips && hero.chips.length > 0 ? (
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <span className="font-sans text-sm font-semibold text-espresso">
                {hero.chipsLabel}
              </span>
              {hero.chips.map((chip) => (
                <span key={chip} className="pill">
                  {chip}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-7 max-w-xl font-sans text-sm text-espresso/60">
              {hero.footnote}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          {photo ? (
            <div className="overflow-hidden rounded-3xl border border-bronze/25">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1400}
                height={932}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="dot-pattern flex aspect-[4/3] flex-col items-center justify-center rounded-3xl bg-espresso px-8 text-center">
              <Image
                src="/images/mw-logo.svg"
                alt=""
                width={1600}
                height={1414}
                unoptimized
                className="h-24 w-auto"
              />
              <p className="mt-6 font-script text-3xl text-champagne sm:text-4xl">
                {hero.panelCaption}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
