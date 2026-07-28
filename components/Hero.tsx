"use client";

// ============================================================================
// Hero — cream/ivory stage with the signature headline and the partner
// portrait framed in a gold-ringed oval. Primary + secondary CTAs.
// ============================================================================

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icons";
import { SITE, WHATSAPP_CTA_HREF } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Decorative gold flourishes in the background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-radial opacity-70" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-gold-radial opacity-40" />
        <svg
          className="absolute inset-x-0 top-0 h-full w-full opacity-[0.55]"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-100 120 C300 40 600 260 1540 90"
            stroke="#E5C87E"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <path
            d="M-100 180 C360 90 700 320 1560 150"
            stroke="#C79A4B"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container-mw relative grid items-center gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24">
        {/* ---- Left: copy ---- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p variants={item} className="eyebrow flex items-center justify-center gap-3 lg:justify-start">
            <span className="gold-diamond" />
            Chartered Accountants
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 font-script text-3xl text-bronze sm:text-4xl"
          >
            {SITE.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-espresso sm:text-6xl lg:text-7xl"
          >
            <span className="block">Trust.</span>
            <span className="block">Expertise.</span>
            <span className="block text-gold-gradient">Excellence.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-coffee/90 lg:mx-0"
          >
            Delivering reliable financial solutions and strategic insights to
            help your business{" "}
            <span className="font-semibold text-espresso">grow with confidence.</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={WHATSAPP_CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Book a Consultation
            </a>
            <a href="/#services" className="btn-outline w-full sm:w-auto">
              Our Services
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-coffee/80 lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-gold" /> ICAP Qualified (ACA)
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-gold" /> Multan • Lahore • Karachi
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-gold" /> Individuals to Corporates
            </span>
          </motion.div>
        </motion.div>

        {/* ---- Right: portrait in gold oval frame ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative animate-float">
            {/* glow */}
            <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-gold-radial" />
            {/* rotating gold ring accent */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-bronze/40" />
            {/* framed oval */}
            <div className="relative h-[340px] w-[280px] overflow-hidden rounded-[50%] bg-gold-gradient p-[5px] shadow-gold-lg sm:h-[420px] sm:w-[340px]">
              <div className="h-full w-full overflow-hidden rounded-[50%] bg-cream">
                <Image
                  src="/images/partner-portrait.jpg"
                  alt="Syed Muhammad Wajahat, ACA — Partner & Sole Proprietor at MW & Co., Chartered Accountants"
                  width={340}
                  height={420}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            {/* name badge */}
            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-bronze/30 bg-espresso px-6 py-2.5 text-center shadow-gold">
              <p className="font-serif text-sm font-semibold text-cream">
                {SITE.founder.name},{" "}
                <span className="text-champagne">{SITE.founder.credential}</span>
              </p>
              <p className="font-sans text-[0.6rem] uppercase tracking-label text-bronze">
                {SITE.founder.title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
