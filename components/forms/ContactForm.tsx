"use client";

// ============================================================================
// ContactForm: used on the home page and on the contact page. There is no
// backend. "Send by email" opens the visitor's mail program with everything
// filled in, "Send via WhatsApp" opens WhatsApp with the same details.
// ============================================================================

import { useState } from "react";
import Link from "next/link";
import CountrySelect from "./CountrySelect";
import Dropdown from "./Dropdown";
import { FIRM, mailtoHref, whatsappHref } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

interface Props {
  locale: Locale;
  dict: Dictionary;
  /** Label for the single select: "Service" on home, "I need" on contact. */
  selectLabel: string;
  selectOptions: string[];
  /** Pre-filled message, used by /contact?service=<slug>. */
  initialMessage?: string;
}

export default function ContactForm({
  locale,
  dict,
  selectLabel,
  selectOptions,
  initialMessage = "",
}: Props) {
  const f = dict.common.form;
  const [values, setValues] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    choice: "",
    message: initialMessage,
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof typeof values) => (value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  function composed() {
    const lines = [
      `${f.fullName}: ${values.fullName}`,
      `${f.company}: ${values.company}`,
      `${f.country}: ${values.country}`,
      `${f.email}: ${values.email}`,
      `${f.phone}: ${values.phone}`,
      `${selectLabel}: ${values.choice}`,
      "",
      `${f.message}:`,
      values.message,
    ];
    return lines.join("\n");
  }

  function validate() {
    if (!values.fullName.trim() || !values.email.trim() || !values.message.trim()) {
      setError(f.requiredNote);
      return false;
    }
    if (!agreed) {
      setError(f.privacyConsent);
      return false;
    }
    setError("");
    return true;
  }

  function send(channel: "email" | "whatsapp") {
    if (!validate()) return;
    const subject = values.choice
      ? `${dict.common.emailSubject}: ${values.choice}`
      : dict.common.emailSubject;

    if (channel === "email") {
      window.location.href = mailtoHref(subject, composed());
    } else {
      window.open(
        whatsappHref(`${subject}\n\n${composed()}`),
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <form
      className="card"
      onSubmit={(e) => {
        e.preventDefault();
        send("email");
      }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="cf-name"
          label={`${f.fullName} *`}
          value={values.fullName}
          onChange={set("fullName")}
          autoComplete="name"
          required
        />
        <Field
          id="cf-company"
          label={f.company}
          value={values.company}
          onChange={set("company")}
          autoComplete="organization"
        />

        <CountrySelect
          label={f.country}
          value={values.country}
          onChange={set("country")}
          locale={locale}
          dict={dict}
          priorityCodes={dict.common.priorityCountryCodes}
        />

        <Field
          id="cf-email"
          label={`${f.email} *`}
          type="email"
          value={values.email}
          onChange={set("email")}
          autoComplete="email"
          dir="ltr"
          required
        />

        <Field
          id="cf-phone"
          label={f.phone}
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
          dir="ltr"
        />

        <Dropdown
          label={selectLabel}
          value={values.choice}
          onChange={set("choice")}
          placeholder={f.choosePlaceholder}
          groups={[
            {
              options: selectOptions.map((option) => ({
                key: option,
                label: option,
              })),
            },
          ]}
        />
      </div>

      <div className="mt-5">
        <label className="field-label" htmlFor="cf-message">
          {f.message} *
        </label>
        <textarea
          id="cf-message"
          className="field min-h-[9rem] resize-y"
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          required
        />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="cf-privacy"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-bronze"
          required
        />
        <label htmlFor="cf-privacy" className="font-sans text-sm text-espresso">
          {f.privacyConsent}{" "}
          <Link
            href={localePath(locale, "/privacy")}
            className="text-bronze underline"
          >
            {dict.footer.legalLinks[0].label}
          </Link>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 font-sans text-sm text-[#9b2c2c]">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="btn-gold">
          {dict.common.sendByEmail}
        </button>
        <button
          type="button"
          className="btn-outline"
          onClick={() => send("whatsapp")}
        >
          {dict.common.sendViaWhatsApp}
        </button>
      </div>

      <p className="mt-4 font-sans text-xs text-espresso/60">
        <bdi dir="ltr">{FIRM.email.display}</bdi>
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  dir,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  dir?: "ltr";
  required?: boolean;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="field"
        value={value}
        dir={dir}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}
