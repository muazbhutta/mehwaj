"use client";

// ============================================================================
// Faq — accessible accordion of question-based content (targets long-tail
// search). Wave divider transitions brown → cream at the top.
// FAQPage JSON-LD is emitted by the page that renders this component.
// ============================================================================

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icons";
import WaveDivider from "./WaveDivider";
import { FAQS } from "@/lib/constants";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream">
      {/* brown → cream wave: coffee top (matches Why-Us) fills down to cream */}
      <WaveDivider fill="#F7F3EA" className="-mt-px bg-coffee" />

      <div className="container-mw pb-20 pt-4 sm:pb-24 lg:pb-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-diamond" /> Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-espresso sm:text-5xl">
            Answers to common <span className="text-gold-gradient">questions</span>
          </h2>
          <p className="mt-5 text-lg text-coffee/80">
            Everything you need to know about working with MW &amp; Co.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-offwhite transition-colors duration-300 ${
                    isOpen ? "border-gold/60 shadow-card" : "border-bronze/20"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-serif text-lg font-semibold text-espresso">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-gold-gradient text-espresso"
                            : "bg-cream text-bronze"
                        }`}
                      >
                        <Icon name="chevron-down" className="h-5 w-5" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 leading-relaxed text-coffee/90">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
