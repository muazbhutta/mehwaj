// ============================================================================
// Logo — MW monogram + wordmark lockup, reused in the navbar and footer.
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

interface LogoProps {
  /** Colour scheme of the wordmark text. */
  variant?: "dark" | "light";
  /** Show the "MW & CO." wordmark next to the monogram. */
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({
  variant = "dark",
  showWordmark = true,
  className = "",
}: LogoProps) {
  // On light (cream) backgrounds the wordmark is dark coffee brown; on dark
  // backgrounds it's cream. The sub-label stays bronze as a gold accent.
  const wordColor = variant === "light" ? "text-cream" : "text-coffee";
  const subColor = variant === "light" ? "text-champagne" : "text-bronze";

  return (
    <Link
      href="/#home"
      aria-label={`${SITE.name} — home`}
      className={`group flex items-center gap-3 ${className}`}
    >
      <Image
        src="/images/mw-logo.svg"
        alt="MW & Co., Chartered Accountants monogram logo"
        width={1600}
        height={1414}
        priority
        unoptimized
        className="h-11 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 sm:h-12"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-lg font-bold tracking-wide sm:text-xl ${wordColor}`}
          >
            MW &amp; CO.
          </span>
          <span
            className={`mt-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-label sm:text-[0.6rem] ${subColor}`}
          >
            Chartered Accountants
          </span>
        </span>
      )}
    </Link>
  );
}
