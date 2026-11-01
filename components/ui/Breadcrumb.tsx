// ============================================================================
// Breadcrumb: "Home / Services / Assurance". The last crumb is plain text.
// ============================================================================

import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({
  items,
  variant = "dark",
}: {
  items: Crumb[];
  /** "dark" sits on a light section, "light" sits on an espresso band. */
  variant?: "dark" | "light";
}) {
  const base = variant === "light" ? "text-champagne/80" : "text-espresso/60";
  const linkHover =
    variant === "light" ? "hover:text-champagne" : "hover:text-bronze";

  return (
    <nav aria-label="Breadcrumb" className={`font-sans text-sm ${base}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${linkHover}`}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
