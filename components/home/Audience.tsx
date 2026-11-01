// ============================================================================
// Two audience cards: businesses in Pakistan, and firms across the Gulf.
// The Arabic home page shows the Gulf card first.
// ============================================================================

import Link from "next/link";
import { Arrow } from "../Icons";
import Reveal from "../Reveal";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

function Card({
  eyebrow,
  title,
  text,
  link,
  href,
  delay,
}: {
  eyebrow: string;
  title: string;
  text: string;
  link: string;
  href: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card card-lift h-full">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-2xl font-bold text-espresso sm:text-[1.7rem]">
          {title}
        </h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-espresso/75">
          {text}
        </p>
        <Link href={href} className="link-gold mt-6">
          {link}
          <Arrow />
        </Link>
      </div>
    </Reveal>
  );
}

export default function Audience({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const a = dict.home.audience;

  const pakistan = (
    <Card
      key="pakistan"
      {...a.pakistan}
      href={localePath(locale, "/services")}
      delay={0}
    />
  );
  const gulf = (
    <Card
      key="gulf"
      {...a.gulf}
      href={localePath(locale, "/secondments")}
      delay={0.08}
    />
  );

  return (
    <section className="bg-cream pt-14 sm:pt-16">
      <div className="container-mw grid gap-6 lg:grid-cols-2">
        {locale === "ar" ? [gulf, pakistan] : [pakistan, gulf]}
      </div>
    </section>
  );
}
