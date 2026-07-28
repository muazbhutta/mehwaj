"use client";

// ============================================================================
// WhatsAppButton — floating bottom-right click-to-chat button.
// Green base with a gold ring; gentle attention pulse; appears after scroll.
// ============================================================================

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icons";
import { CONTACT, WHATSAPP_CTA_HREF } from "@/lib/constants";

export default function WhatsAppButton() {
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
          href={WHATSAPP_CTA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with MW & Co. on WhatsApp — ${CONTACT.whatsapp.display}`}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7"
        >
          {/* Tooltip label (desktop) */}
          <span className="pointer-events-none hidden translate-x-2 rounded-full border border-bronze/30 bg-espresso px-4 py-2 text-sm font-medium text-cream opacity-0 shadow-gold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
            Chat on WhatsApp
          </span>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold ring-2 ring-champagne transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
            {/* pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
            <Icon name="whatsapp" className="relative h-8 w-8 sm:h-9 sm:w-9" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
