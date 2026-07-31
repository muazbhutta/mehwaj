// ============================================================================
// PageHero - dark espresso header band for interior pages, with visual
// breadcrumbs and matching BreadcrumbList JSON-LD.
// ============================================================================

import Link from "next/link";
import Icon from "./Icons";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export interface Crumb {
  name: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[]; // excluding the current page; current is added from `title`
}

export default function PageHero({ eyebrow, title, subtitle, crumbs }: PageHeroProps) {
  // Build absolute-URL breadcrumb trail for schema (Home + crumbs + current)
  const schemaItems = [
    { name: "Home", url: SITE_URL },
    ...crumbs.map((c) => ({ name: c.name, url: `${SITE_URL}${c.href}` })),
    { name: title, url: SITE_URL },
  ];

  return (
    <section className="relative overflow-hidden bg-espresso pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(schemaItems))}
      />

      {/* decorative glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full bg-gold-radial opacity-40" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-gold-radial opacity-25" />
      </div>

      <div className="container-mw relative text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-5 flex justify-center">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-cream/60">
            <li>
              <Link href="/" className="transition-colors hover:text-champagne">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-1.5">
                <Icon name="chevron-down" className="h-3.5 w-3.5 -rotate-90 text-bronze" />
                <Link href={c.href} className="transition-colors hover:text-champagne">
                  {c.name}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1.5">
              <Icon name="chevron-down" className="h-3.5 w-3.5 -rotate-90 text-bronze" />
              <span className="text-champagne">{title}</span>
            </li>
          </ol>
        </nav>

        {eyebrow && (
          <p className="eyebrow flex items-center justify-center gap-3 text-champagne/80">
            <span className="gold-diamond" /> {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-serif text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
