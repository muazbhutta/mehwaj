"use client";

// ============================================================================
// Navbar - sticky. Transparent over the hero, solid espresso once scrolled.
// Collapses to a gold hamburger menu on mobile.
// ============================================================================

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Icon from "./Icons";
import { NAV_LINKS, WHATSAPP_CTA_HREF } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Toggle solid background after a small scroll threshold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-bronze/20 bg-espresso/95 py-2 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-3"
      }`}
    >
      <nav className="container-mw flex items-center justify-between">
        {/* Dark wordmark over the light hero; light once the bar turns solid */}
        <Logo variant={solid ? "light" : "dark"} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative font-sans text-sm font-medium transition-colors ${
                  solid
                    ? "text-cream/90 hover:text-champagne"
                    : "text-coffee hover:text-bronze"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_CTA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold hidden lg:inline-flex"
        >
          Get a Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden ${
            solid
              ? "text-champagne hover:bg-champagne/10"
              : "text-coffee hover:bg-coffee/10"
          }`}
        >
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-mw flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-sans text-base font-medium text-cream/90 transition-colors hover:bg-champagne/10 hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={WHATSAPP_CTA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-gold w-full"
                >
                  Get a Consultation
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
