// ============================================================================
// Secondments page: the pitch for Gulf accounting firms and companies.
// The firm profile button only renders when public/firm-profile.pdf exists.
// ============================================================================

import Link from "next/link";
import Icon, { Arrow, type IconName } from "../Icons";
import Reveal from "../Reveal";
import StepsBand from "../ui/StepsBand";
import SecondmentForm from "../forms/SecondmentForm";
import {
  FIRM,
  JURISDICTION_CODES,
  JURISDICTION_LABELS,
  ROLE_KEYS,
} from "@/lib/site";
import { publicFileExists } from "@/lib/assets";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { Locale } from "@/lib/i18n/types";

// ----------------------------------------------------------------------------
// The icons that sit beside the clients served lists. They are a design
// decision, not copy, so they live here and are matched to the dictionary by
// position rather than being repeated in English and in Arabic.
// ----------------------------------------------------------------------------

/** One per entry of clients.sectors, in order. */
const SECTOR_ICONS: IconName[] = [
  "hierarchy",
  "shield",
  "coins",
  "crane",
  "factory",
  "bed",
  "signal",
  "wrench",
];

/** One per entry of clients.bvi, in order. */
const BVI_ICONS: IconName[] = ["hierarchy", "shield", "anchor", "document"];

/** One per entry of clients.pakistan, in order. */
const PAKISTAN_ICONS: IconName[] = ["bank", "shield", "factory", "building"];

/** One per entry of clients.pakistanStats, in order. */
const PAKISTAN_STAT_ICONS: IconName[] = ["document", "scale", "search-check"];

/** Falls back to the tick so a new list entry never renders a blank square. */
function iconAt(icons: IconName[], index: number): IconName {
  return icons[index] ?? "check";
}

export default function SecondmentsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const s = dict.secondments;
  const hasProfile = publicFileExists("firm-profile.pdf");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema(locale, [
            { name: dict.common.home, path: "/" },
            { name: s.hero.h1, path: "/secondments" },
          ])
        )}
      />

      {/* E1. Hero */}
      <section className="dot-pattern bg-espresso">
        <div className="container-mw grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr] lg:gap-14 lg:py-20">
          <Reveal>
            <p className="eyebrow-light">{s.hero.eyebrow}</p>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
              {s.hero.h1}
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-cream/75 sm:text-lg">
              {s.hero.paragraph}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#request" className="btn-gold">
                {s.hero.primaryCta}
                <Arrow />
              </a>
              {hasProfile && (
                <a
                  href="/firm-profile.pdf"
                  className="btn-outline-light"
                  download
                >
                  {s.hero.downloadCta}
                  <Icon name="download" className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-dark">
              <p className="eyebrow-light">{s.hero.cardEyebrow}</p>
              <ul className="mt-5 space-y-2.5 font-sans text-sm text-cream">
                <li>
                  <a href={FIRM.saudi.href} className="hover:text-champagne">
                    {dict.footer.ksaLabel}{" "}
                    <bdi dir="ltr">{FIRM.saudi.display}</bdi>
                  </a>
                </li>
                <li>
                  <a href={FIRM.email.href} className="hover:text-champagne">
                    <bdi dir="ltr">{FIRM.email.display}</bdi>
                  </a>
                </li>
                <li>
                  <a
                    href={FIRM.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-champagne"
                  >
                    {dict.footer.whatsappLabel}{" "}
                    <bdi dir="ltr">{FIRM.whatsapp.display}</bdi>
                  </a>
                </li>
              </ul>
              {s.hero.cardNote && (
                <p className="mt-5 font-sans text-xs text-cream/60">
                  {s.hero.cardNote}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* E2. Clients served, from page one of the firm profile */}
      <section className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{s.clients.eyebrow}</p>
            <h2 className="h-section">{s.clients.title}</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-espresso/75">
              {s.clients.intro}
            </p>
          </Reveal>

          {/* The four figures sit in an espresso panel, the way the printed
              profile sets them, so they read as one block rather than four
              cards floating on the cream. */}
          <Reveal>
            <div className="mt-12 rounded-3xl bg-espresso p-6 shadow-card sm:p-10">
              <p className="eyebrow-light">{s.clients.statsHeading}</p>
              <div className="stagger mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {s.clients.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card-lift h-full rounded-2xl border border-bronze/45 bg-coffee/40 p-6"
                  >
                    <p className="font-serif text-4xl font-bold text-champagne">
                      {stat.value}
                    </p>
                    <h3 className="mt-3 font-sans text-base font-semibold text-white">
                      {stat.label}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-cream/70">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="eyebrow mt-12">{s.clients.sectorsHeading}</p>
            <div className="stagger mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {s.clients.sectors.map((sector, i) => (
                <div
                  key={sector.name}
                  className="card-lift h-full rounded-xl border border-bronze/25 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory text-bronze"
                    >
                      <Icon
                        name={iconAt(SECTOR_ICONS, i)}
                        className="h-[18px] w-[18px]"
                      />
                    </span>
                    <h3 className="font-serif text-base font-bold text-espresso">
                      {sector.name}
                    </h3>
                  </div>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/70">
                    {sector.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {[
                {
                  heading: s.clients.bviHeading,
                  items: s.clients.bvi,
                  icon: "anchor" as IconName,
                  icons: BVI_ICONS,
                },
                {
                  heading: s.clients.pakistanHeading,
                  items: s.clients.pakistan,
                  icon: "bank" as IconName,
                  icons: PAKISTAN_ICONS,
                },
              ].map((column) => (
                <div key={column.heading} className="card h-full">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory text-bronze"
                    >
                      <Icon name={column.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <p className="eyebrow">{column.heading}</p>
                  </div>
                  <ul className="mt-5">
                    {column.items.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-t border-bronze/15 py-3 font-sans text-sm text-espresso/80 first:border-t-0 first:pt-0 last:pb-0"
                      >
                        <Icon
                          name={iconAt(column.icons, i)}
                          className="mt-0.5 h-[18px] w-[18px] shrink-0 text-bronze"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="eyebrow mt-12">{s.clients.pakistanStatsHeading}</p>
            <div className="stagger mt-5 grid gap-6 sm:grid-cols-3">
              {s.clients.pakistanStats.map((stat, i) => (
                <div
                  key={stat.text}
                  className="card card-lift flex h-full items-start gap-4"
                >
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory text-bronze"
                  >
                    <Icon
                      name={iconAt(PAKISTAN_STAT_ICONS, i)}
                      className="h-6 w-6"
                    />
                  </span>
                  <div>
                    <p className="font-serif text-4xl font-bold text-bronze">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/70">
                      {stat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* E2b. Secondment experience, from page two of the firm profile, where
          the four jurisdictions sit together in one espresso panel with gold
          code badges. */}
      <section className="section bg-ivory">
        <div className="container-mw">
          <Reveal>
            <div className="rounded-3xl bg-espresso p-6 shadow-card sm:p-10 lg:p-12">
              <p className="eyebrow-light">{s.experience.eyebrow}</p>
              <h2 className="h-section-light">{s.experience.title}</h2>
              <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-cream/75">
                {s.experience.intro}
              </p>

              <div className="stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {JURISDICTION_CODES.map((code) => (
                  <div
                    key={code}
                    className="card-lift h-full rounded-2xl border border-bronze/45 bg-coffee/40 p-6"
                  >
                    <span
                      aria-hidden
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-sans text-xs font-bold text-espresso"
                    >
                      {JURISDICTION_LABELS[code]}
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-bold text-white">
                      {s.experience.items[code].name}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-cream/70">
                      {s.experience.items[code].text}
                    </p>
                    {s.experience.items[code].clients && (
                      <p className="mt-4 font-serif text-2xl font-bold text-champagne">
                        {s.experience.items[code].clients}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <p className="mt-8 font-sans text-sm text-espresso/70">
            {s.experience.availability}
          </p>
        </div>
      </section>

      {/* E3. Roles */}
      <section id="roles" className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{s.roles.eyebrow}</p>
            <h2 className="h-section">{s.roles.title}</h2>
          </Reveal>

          {/* Table on desktop */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-bronze/25 bg-white lg:block">
            <table className="w-full text-start">
              <thead className="bg-espresso">
                <tr>
                  {[
                    s.roles.columns.role,
                    s.roles.columns.work,
                    s.roles.columns.experience,
                  ].map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-6 py-4 text-start font-sans text-xs font-semibold uppercase tracking-label text-white"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROLE_KEYS.map((key) => (
                  <tr key={key} className="border-t border-bronze/20">
                    <th
                      scope="row"
                      className="px-6 py-4 text-start font-sans text-sm font-semibold text-espresso"
                    >
                      {s.roles.items[key].role}
                    </th>
                    <td className="px-6 py-4 font-sans text-sm text-espresso/75">
                      {s.roles.items[key].work}
                    </td>
                    <td className="px-6 py-4 font-sans text-sm text-espresso/75">
                      {s.roles.items[key].experience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stacked cards on mobile */}
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
            {ROLE_KEYS.map((key) => (
              <li key={key} className="card p-5">
                <h3 className="font-sans text-base font-semibold text-espresso">
                  {s.roles.items[key].role}
                </h3>
                <p className="mt-2 font-sans text-sm text-espresso/75">
                  <span className="eyebrow block">{s.roles.columns.work}</span>
                  {s.roles.items[key].work}
                </p>
                <p className="mt-3 font-sans text-sm text-espresso/75">
                  <span className="eyebrow block">
                    {s.roles.columns.experience}
                  </span>
                  {s.roles.items[key].experience}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* E4. Ways to work */}
      <section className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{s.ways.eyebrow}</p>
            <h2 className="h-section">{s.ways.title}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {s.ways.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card h-full">
                  <h3 className="font-serif text-xl font-bold text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/75">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E5. How a secondment works */}
      <StepsBand steps={s.how.steps} checks={s.how.checks}>
        <div className="mb-10">
          <p className="eyebrow-light">{s.how.eyebrow}</p>
          <h2 className="h-section-light">{s.how.title}</h2>
        </div>
      </StepsBand>

      {/* E6. Remote support */}
      <section className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{s.remote.eyebrow}</p>
            <h2 className="h-section">{s.remote.title}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {s.remote.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card h-full">
                  <h3 className="font-serif text-xl font-bold text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/75">
                    {item.text}
                  </p>
                  {item.href && (
                    <Link
                      href={localePath(locale, item.href)}
                      className="link-gold mt-4"
                    >
                      {dict.common.learnMore}
                      <Arrow />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E7. Request form */}
      <section id="request" className="section bg-ivory">
        <div className="container-mw grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow">{s.request.eyebrow}</p>
            <h2 className="h-section">{s.request.title}</h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-espresso/75">
              {s.request.intro}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SecondmentForm locale={locale} dict={dict} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
