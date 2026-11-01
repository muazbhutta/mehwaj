"use client";

// ============================================================================
// Reveal: a subtle fade and slide in as a section scrolls into view.
//
// The content is visible by default. The hidden state is only applied once the
// inline script in the layout has added `js-reveal` to <html>, so a visitor
// without JavaScript, or a crawler that does not run it, still sees everything.
// A short safety timer shows the content even if the observer never reports.
// ============================================================================

import { useEffect, useRef, useState } from "react";

type Element = "div" | "li" | "section" | "article";

interface RevealProps {
  children: React.ReactNode;
  /** Seconds of delay before this block fades in. */
  delay?: number;
  className?: string;
  as?: Element;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    // Never leave content hidden if the observer does not report.
    const timer = window.setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement & HTMLLIElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
