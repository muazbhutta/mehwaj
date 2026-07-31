"use client";

// ============================================================================
// Contact - cream card contact form (with gold-accent inputs) + NAP details
// and three city location cards.
//
// No backend is assumed: on submit the form composes a pre-filled WhatsApp
// message (the firm's primary channel). Swap `handleSubmit` for a POST to your
// form endpoint (Formspree, a Next Route Handler, etc.) when you add a backend.
// ============================================================================

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import Icon from "./Icons";
import { CONTACT, SERVICES, CITIES } from "@/lib/constants";

const contactMethods = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.whatsapp.display,
    href: CONTACT.whatsapp.href,
  },
  {
    icon: "phone",
    label: "Call us",
    value: CONTACT.phone.display,
    href: CONTACT.phone.href,
  },
  {
    icon: "mail",
    label: "Email",
    value: CONTACT.email.display,
    href: CONTACT.email.href,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      "New consultation request - MW & Co.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service || "General enquiry"}`,
      "",
      `Message: ${form.message}`,
    ];
    const url = `${CONTACT.whatsapp.href}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full rounded-xl border border-bronze/30 bg-cream px-4 py-3 text-charcoal placeholder:text-coffee/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-champagne/50";

  return (
    <section id="contact" className="relative bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-mw">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="gold-diamond" /> Get in Touch
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-espresso sm:text-5xl">
            Book your <span className="text-gold-gradient">free consultation</span>
          </h2>
          <p className="mt-5 text-lg text-coffee/80">
            Tell us a little about your needs and we&apos;ll get back to you with
            the right solution.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ---- Form card ---- */}
          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-bronze/20 bg-offwhite p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-espresso">
                    Full Name <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-espresso">
                    Phone <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+92 3xx xxxxxxx"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-espresso">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-espresso">
                    Service
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other / General enquiry</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-espresso">
                  Message <span className="text-bronze">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                  className={`${inputBase} resize-none`}
                />
              </div>

              <button type="submit" className="btn-gold mt-6 w-full">
                <Icon name="whatsapp" className="h-5 w-5" />
                Send via WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-coffee/60">
                Opens WhatsApp with your details pre-filled. Prefer email?{" "}
                <a href={CONTACT.email.href} className="font-semibold text-bronze underline">
                  {CONTACT.email.display}
                </a>
              </p>
            </form>
          </Reveal>

          {/* ---- Contact methods (stretch to match the form height) ---- */}
          <Reveal direction="left" delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.icon === "whatsapp" ? "_blank" : undefined}
                  rel={m.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                  className="group flex flex-1 items-center gap-4 rounded-2xl border border-bronze/20 bg-offwhite p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-espresso">
                    <Icon name={m.icon} className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wide text-bronze">
                      {m.label}
                    </span>
                    <span className="font-serif text-lg font-bold text-espresso transition-colors group-hover:text-bronze">
                      {m.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---- Office locations (full-width row, compact) ---- */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((city) => (
              <a
                key={city.slug}
                href={`/chartered-accountant-${city.slug}`}
                className="group relative flex items-center justify-center overflow-hidden rounded-xl border border-bronze/20 bg-espresso px-4 py-3.5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-gold"
              >
                {/* gold left accent on hover */}
                <span className="absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-y-100" />
                {/* location pin - left side */}
                <span className="absolute left-3.5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-bronze/30 transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-espresso">
                  <Icon name="map-pin" className="h-5 w-5" />
                </span>
                {/* centered text */}
                <span className="flex flex-col">
                  <span className="font-serif text-base font-bold leading-tight text-cream">
                    {city.name}
                  </span>
                  <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-champagne/70">
                    {city.region}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
