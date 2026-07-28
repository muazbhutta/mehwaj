"use client";

// ============================================================================
// Reveal — subtle fade / slide-in on scroll (AOS-style) via Framer Motion.
// Honours prefers-reduced-motion automatically (Framer's useReducedMotion).
// ============================================================================

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  /** Render as a different element (default div). */
  as?: "div" | "li" | "span" | "section" | "article";
}

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, ...(reduce ? {} : offset[direction]) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
