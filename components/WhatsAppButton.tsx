"use client";

// ============================================================================
// WhatsAppButton: floating click to chat button, shown after a little scroll.
// ============================================================================

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
      {show && (
        <motion.a
          href={whatsappHref(dict.common.whatsappConsultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${dict.common.chatOnWhatsApp} ${FIRM.whatsapp.display}`}
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="group fixed bottom-5 end-5 z-40 flex items-center gap-3 sm:bottom-7 sm:end-7"
        >
          <span className="pointer-events-none hidden rounded-full border border-bronze/30 bg-espresso px-4 py-2 text-sm font-medium text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
            {dict.common.chatOnWhatsApp}
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1EA952] text-white ring-2 ring-champagne transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16">
            <Icon name="whatsapp" className="h-7 w-7 sm:h-8 sm:w-8" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
