// ============================================================================
// Get in touch: the contact rows on the reading side, the form on the other.
// The form has no backend; it opens email or WhatsApp.
// ============================================================================

import Reveal from "../Reveal";
import ContactForm from "../forms/ContactForm";
import { FIRM } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n/types";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="card px-6 py-4">
      <p className="font-sans text-sm text-espresso/80">
        <span className="font-semibold text-espresso">{label}</span>{" "}
        <span aria-hidden>·</span> {children}
      </p>
    </div>
  );
}

export default function ContactSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const c = dict.home.contact;

  return (
    <section className="section bg-ivory">
      <div className="container-mw grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="h-section">{c.title}</h2>
          <p className="mt-4 font-sans text-base text-espresso/75">{c.intro}</p>

          <div className="mt-8 space-y-4">
            <Row label={c.pakistanLabel}>
              <a href={FIRM.whatsapp.href} className="hover:text-bronze">
                {dict.contact.whatsappLabel}{" "}
                <bdi dir="ltr">{FIRM.whatsapp.display}</bdi>
              </a>{" "}
              <span aria-hidden>·</span>{" "}
              <a href={FIRM.office.href} className="hover:text-bronze">
                {dict.contact.officeLabel}{" "}
                <bdi dir="ltr">{FIRM.office.display}</bdi>
              </a>
            </Row>
            <Row label={c.saudiLabel}>
              <a href={FIRM.saudi.href} className="hover:text-bronze">
                <bdi dir="ltr">{FIRM.saudi.display}</bdi>
              </a>
            </Row>
            <Row label={c.emailLabel}>
              <a href={FIRM.email.href} className="hover:text-bronze">
                <bdi dir="ltr">{FIRM.email.display}</bdi>
              </a>
            </Row>
          </div>

        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm
            locale={locale}
            dict={dict}
            selectLabel={dict.common.form.service}
            selectOptions={dict.common.serviceOptions}
          />
        </Reveal>
      </div>
    </section>
  );
}
