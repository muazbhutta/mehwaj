"use client";

// ============================================================================
// WhatsAppButton: floating click to chat button, shown after a little scroll.
//
// It springs in with a CSS transition rather than an animation library. This
// was the last thing on the site pulling in framer-motion, and a floating
// button is not worth the JavaScript that came with it.
// ============================================================================

import { useEffect, useState } from "react";
import Icon from "./Icons";
import { FIRM, whatsappHref } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/types";

export default function WhatsAppButton({ dict }: { dict: Dictionary }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref(dict.common.whatsappConsultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${dict.common.chatOnWhatsApp} ${FIRM.whatsapp.display}`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`group fixed bottom-5 end-5 z-40 flex items-center gap-3 transition-all duration-300 ease-out sm:bottom-7 sm:end-7 ${
        show
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <span className="pointer-events-none hidden rounded-full border border-bronze/30 bg-espresso px-4 py-2 text-sm font-medium text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        {dict.common.chatOnWhatsApp}
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1EA952] text-white ring-2 ring-champagne transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16">
        <Icon name="whatsapp" className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
