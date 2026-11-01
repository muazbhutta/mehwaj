// ============================================================================
// StepsBand: the espresso band with five numbered gold circles and a row of
// ticks underneath. Shared by the home page and the secondments page.
// ============================================================================

import Icon from "../Icons";
import type { StepCopy } from "@/lib/i18n/types";

export default function StepsBand({
  steps,
  checks,
  children,
}: {
  steps: StepCopy[];
  checks: string[];
  /** Optional heading block rendered above the steps, inside the band. */
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-espresso dot-pattern">
      <div className="container-mw py-14 sm:py-16">
        {children}

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold font-serif text-base text-gold"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-sans text-base font-semibold text-cream">
                {step.title}
              </h3>
              <p className="mt-1 font-sans text-sm leading-relaxed text-cream/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <ul className="mt-10 grid gap-3 border-t border-champagne/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {checks.map((check) => (
            <li
              key={check}
              className="flex items-start gap-2 font-sans text-sm text-champagne"
            >
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{check}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
