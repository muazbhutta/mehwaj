// ============================================================================
// Secondments page: the pitch for Gulf accounting firms and companies.
// The firm profile button only renders when public/firm-profile.pdf exists.
// ============================================================================

import Link from "next/link";
import Icon, { Arrow } from "../Icons";
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
              <p className="mt-5 font-sans text-xs text-cream/60">
                {s.hero.cardNote}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* E2. Experience */}
      <section className="section bg-cream">
        <div className="container-mw">
          <Reveal>
            <p className="eyebrow">{s.experience.eyebrow}</p>
            <h2 className="h-section">{s.experience.title}</h2>
            <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-espresso/75">
              {s.experience.intro}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {JURISDICTION_CODES.map((code, i) => (
              <Reveal key={code} delay={i * 0.06}>
                <div className="card card-lift h-full">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso font-sans text-xs font-bold text-gold"
                  >
                    {JURISDICTION_LABELS[code]}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-bold text-espresso">
                    {s.experience.items[code].name}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/70">
                    {s.experience.items[code].text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 font-sans text-sm text-espresso/70">
            {s.experience.availability}
          </p>
        </div>
      </section>

      {/* E3. Roles */}
      <section id="roles" className="section bg-ivory">
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
                      className="px-6 py-4 text-start font-sans text-xs font-semibold uppercase tracking-label text-gold"
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
