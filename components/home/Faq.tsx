"use client";

// ============================================================================
// FAQ accordion. The second item is open when the page loads, matching the
// approved design.
// ============================================================================

import { useState } from "react";
import Icon from "../Icons";
import type { Dictionary } from "@/lib/i18n/types";

export default function Faq({ dict }: { dict: Dictionary }) {
  const faq = dict.home.faq;
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="section bg-cream">
      <div className="container-mw grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="h-section">{faq.title}</h2>
          <p className="mt-5 font-sans text-base text-espresso/70">
            {faq.intro}
          </p>
        </div>

        <div>
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-bronze/25">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-start font-sans text-base font-semibold text-espresso transition-colors hover:text-bronze"
                  >
                    <span>{item.question}</span>
                    <Icon
                      name={isOpen ? "minus" : "plus"}
                      className="h-5 w-5 shrink-0 text-bronze"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="pb-6">
                    <p className="font-sans text-base leading-relaxed text-espresso/75">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
