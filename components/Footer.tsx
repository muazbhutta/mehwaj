// ============================================================================
// Footer — espresso brown, MW lockup + quick links + contact + city list,
// with a gold city-skyline line-art image (Pakistani landmarks) in the
// background.
// ============================================================================

import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";
import WaveDivider from "./WaveDivider";
import { SITE, CONTACT, NAV_LINKS, SERVICES, SOCIALS } from "@/lib/constants";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      {/* cream → brown wave */}
      <WaveDivider fill="#2B1B10" className="-mt-px bg-cream" />

      {/* Gold city-skyline line-art (vectorised Pakistani landmarks) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none"
      >
        <div
          className="w-full bg-bottom bg-no-repeat opacity-[0.28]"
          style={{
            backgroundImage: "url('/images/skyline.svg')",
            backgroundSize: "100% 100%",
            aspectRatio: "3200 / 731",
          }}
        />
        {/* scrim keeps the bottom bar legible over the artwork */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-espresso via-espresso/70 to-transparent" />
      </div>

      <div className="container-mw relative z-10 pb-8 pt-6">
        <div className="grid gap-10 border-b border-bronze/20 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {SITE.positioning}
            </p>
            <p className="mt-4 font-script text-2xl text-champagne">
              {SITE.tagline}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-serif text-lg font-bold text-champagne">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-serif text-lg font-bold text-champagne">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-cream/70 transition-colors hover:text-champagne"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-champagne">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-cream/70 transition-colors hover:text-champagne"
                >
                  <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phone.href}
                  className="flex items-center gap-2.5 text-cream/70 transition-colors hover:text-champagne"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.email.href}
                  className="flex items-center gap-2.5 text-cream/70 transition-colors hover:text-champagne"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-gold" />
                  {CONTACT.email.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-cream/70">
                <Icon name="map-pin" className="h-4 w-4 shrink-0 text-gold" />
                {CONTACT.cities.join(" • ")}
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/40 text-champagne transition-all duration-300 hover:border-gold hover:bg-gold-gradient hover:text-espresso"
                >
                  <SocialGlyph name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/60">
            © {year} {SITE.name}.{" "}
            <span className="text-champagne/80">
              Together, we commit to excellence.
            </span>
          </p>
          <p className="text-xs text-cream/50">
            Audit • Tax • Advisory — Multan, Lahore &amp; Karachi
          </p>
        </div>
      </div>
    </footer>
  );
}

// Minimal inline brand glyphs for footer socials
function SocialGlyph({ name }: { name: string }) {
  switch (name) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95 4 0 4.75 2.6 4.75 6V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.6 2.1 15.5 2 14.3 2 11.7 2 10 3.6 10 6.4v2.1H7.5V12H10v10h4V12h2.7l.4-3.5H14Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.26 2.2.43.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .43 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 1.8-.43 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.43-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.26-2.2-.43-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.43-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-1.8.43-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.43C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.32-.53.63-.7 1.06-.12.3-.28.8-.32 1.7C3.25 8.5 3.25 8.9 3.25 12s0 3.5.07 4.7c.04.9.2 1.4.32 1.7.17.43.37.74.7 1.06.32.32.63.53 1.06.7.3.12.8.28 1.7.32 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.7.32-.32.53-.63.7-1.06.12-.3.28-.8.32-1.7.07-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.32-1.7-.17-.43-.37-.74-.7-1.06-.32-.32-.63-.53-1.06-.7-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 8.15A3.21 3.21 0 1 0 12 8.8a3.21 3.21 0 0 0 0 6.4Zm6.3-8.35a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
        </svg>
      );
    default:
      return null;
  }
}
