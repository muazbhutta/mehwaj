// ============================================================================
// Logo: the MW monogram with the "M.W. & CO." wordmark, used in the header,
// the footer and the 404 page.
// ============================================================================

import Image from "next/image";
import Link from "next/link";
import { FIRM } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

interface LogoProps {
  locale: Locale;
  dict: Dictionary;
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({
  locale,
  dict,
  variant = "dark",
  className = "",
}: LogoProps) {
  const wordColor = variant === "light" ? "text-cream" : "text-coffee";
  const subColor = variant === "light" ? "text-champagne" : "text-bronze";

  return (
    <Link
      href={localePath(locale, "/")}
      aria-label={`${dict.common.firmFullName}, ${dict.common.home}`}
      className={`group flex items-center gap-3 ${className}`}
    >
      <Image
        src="/images/mw-logo-v2.png"
        alt=""
        width={1024}
        height={1024}
        priority
        sizes="48px"
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
      />
      <span className="flex flex-col whitespace-nowrap leading-none" dir="ltr">
        <span
          className={`font-serif text-lg font-bold tracking-wide sm:text-xl ${wordColor}`}
        >
          {FIRM.wordmark}
        </span>
        <span
          className={`mt-1 font-sans text-[0.55rem] font-semibold uppercase tracking-label sm:text-[0.6rem] ${subColor}`}
        >
          Chartered Accountants
        </span>
      </span>
    </Link>
  );
}
