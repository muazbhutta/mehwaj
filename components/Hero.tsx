"use client";

// ============================================================================
// Hero - modern split (50/50) layout on an ivory stage with a faint gold
// Pakistani-monument watermark behind everything. Text left, framed portrait
// right; stacks (text above image) on mobile. Fade-in on load (Framer Motion).
// ============================================================================

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icons";
import { WHATSAPP_CTA_HREF } from "@/lib/constants";

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
    <section id="home" className="relative overflow-hidden bg-ivory">
      {/* --- Faint monument-skyline watermark behind everything --- */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* light mute so the watermark reads clearly but stays soft */}
        <div className="absolute inset-0 bg-ivory/15" />
        {/* left legibility scrim for the text column */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/80 via-ivory/25 to-transparent" />
        {/* blend the bottom edge into the cream About section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="container-mw relative grid items-center gap-12 pb-16 pt-32 sm:pt-36 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-40">
        {/* =============== LEFT: copy =============== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={item}
            className="font-serif font-bold leading-[1.05] tracking-tight text-espresso"
          >
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              MW <span className="text-gold-gradient">&amp;</span> Co.
            </span>
            <span className="mt-2 block text-2xl font-semibold text-coffee sm:text-3xl lg:text-4xl">
              Chartered Accountants
            </span>
          </motion.h1>

          {/* gold accent rule */}
          <motion.div
            variants={item}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gold-gradient lg:mx-0"
          />

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-coffee/90 lg:mx-0"
          >
            MW &amp; Co., Chartered Accountants is a premier professional{" "}
            <span className="font-semibold text-espresso">ICAP-approved</span>{" "}
            services firm, delivering financial excellence and strategic insights
            across Pakistan. With a deep commitment to trust, integrity, and
            technical expertise, we empower businesses of all sizes - from
            ambitious startups to established enterprises - to achieve{" "}
            <span className="font-semibold text-espresso">sustainable growth</span>.
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
              Get a Consultation
            </a>
            <a href="/#services" className="btn-outline w-full sm:w-auto">
              Our Services
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
          >
            <Icon name="map-pin" className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold uppercase tracking-label text-bronze">
              Islamabad <span className="text-gold">•</span> Lahore{" "}
              <span className="text-gold">•</span> Multan{" "}
              <span className="text-gold">•</span> Karachi
            </span>
          </motion.div>
        </motion.div>

        {/* =============== RIGHT: framed team photo =============== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xl animate-float">
            {/* soft gold glow */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold-radial" />
            {/* offset accent ring for depth */}
            <div className="absolute -inset-3 rounded-[2.4rem] border border-bronze/30" />

            {/* gold-ringed rounded card */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gold-gradient p-[3px] shadow-gold-lg">
              <div className="overflow-hidden rounded-[1.85rem] bg-cream">
                <Image
                  src="/images/team.jpg"
                  alt="The MW & Co. team - audit, tax and advisory professionals collaborating in a client meeting"
                  width={1400}
                  height={933}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
