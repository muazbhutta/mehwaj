"use client";

// ============================================================================
// SecondmentForm: the "request a professional" form. Like the contact form it
// has no backend, it opens a pre-filled email or WhatsApp message.
// ============================================================================

import { useState } from "react";
import Link from "next/link";
import { Arrow } from "../Icons";
import CountrySelect from "./CountrySelect";
import Dropdown from "./Dropdown";
import { mailtoHref, whatsappHref, ROLE_KEYS, GCC_CODES } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function SecondmentForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const f = dict.common.form;
  const roles = dict.secondments.roles.items;

  const [values, setValues] = useState({
    fullName: "",
    firm: "",
    country: "",
    email: "",
    phone: "",
    role: "",
    people: "",
    mode: "",
    startDate: "",
    duration: "",
    notes: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof typeof values) => (value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  function composed() {
    return [
      `${f.fullName}: ${values.fullName}`,
      `${f.firmCompany}: ${values.firm}`,
      `${f.country}: ${values.country}`,
      `${f.email}: ${values.email}`,
      `${f.phone}: ${values.phone}`,
      `${f.roleNeeded}: ${values.role}`,
      `${f.numberOfPeople}: ${values.people}`,
      `${f.workMode}: ${values.mode}`,
      `${f.startDate}: ${values.startDate}`,
      `${f.duration}: ${values.duration}`,
      "",
      `${f.notes}:`,
      values.notes,
    ].join("\n");
  }

  function validate() {
    if (!values.fullName.trim() || !values.firm.trim() || !values.email.trim()) {
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
    const subject = values.role
      ? `${dict.common.secondmentEmailSubject}: ${values.role}`
      : dict.common.secondmentEmailSubject;

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
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        send("email");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Text id="sf-name" label={`${f.fullName} *`} value={values.fullName} onChange={set("fullName")} autoComplete="name" />
        <Text id="sf-firm" label={`${f.firmCompany} *`} value={values.firm} onChange={set("firm")} autoComplete="organization" />

        <CountrySelect
          label={f.country}
          value={values.country}
          onChange={set("country")}
          locale={locale}
          dict={dict}
          priorityCodes={GCC_CODES}
        />

        <Text id="sf-email" label={`${f.email} *`} type="email" value={values.email} onChange={set("email")} autoComplete="email" dir="ltr" />
        <Text id="sf-phone" label={f.phone} type="tel" value={values.phone} onChange={set("phone")} autoComplete="tel" dir="ltr" />

        <Dropdown
          label={f.roleNeeded}
          value={values.role}
          onChange={set("role")}
          placeholder={f.choosePlaceholder}
          groups={[
            {
              options: ROLE_KEYS.map((key) => ({
                key,
                label: roles[key].role,
              })),
            },
          ]}
        />

        <Text id="sf-people" label={f.numberOfPeople} type="number" value={values.people} onChange={set("people")} />

        <Dropdown
          label={f.workMode}
          value={values.mode}
          onChange={set("mode")}
          placeholder={f.choosePlaceholder}
          groups={[
            {
              options: [
                { key: "onSite", label: dict.common.workModes.onSite },
                { key: "remote", label: dict.common.workModes.remote },
                { key: "hybrid", label: dict.common.workModes.hybrid },
              ],
            },
          ]}
        />

        <Text id="sf-start" label={f.startDate} type="date" value={values.startDate} onChange={set("startDate")} />
        <Text id="sf-duration" label={f.duration} value={values.duration} onChange={set("duration")} />
      </div>

      <div className="mt-5">
        <label className="field-label" htmlFor="sf-notes">
          {f.notes}
        </label>
        <textarea
          id="sf-notes"
          className="field min-h-[7rem] resize-y"
          value={values.notes}
          onChange={(e) => set("notes")(e.target.value)}
        />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="sf-privacy"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-bronze"
          required
        />
        <label htmlFor="sf-privacy" className="font-sans text-sm text-espresso">
          {f.privacyConsent}{" "}
          <Link href={localePath(locale, "/privacy")} className="text-bronze underline">
            {dict.footer.legalLinks[0].label}
          </Link>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 font-sans text-sm text-[#9b2c2c]">
          {error}
        </p>
      )}

      <div className="mt-6">
        <button type="submit" className="btn-gold">
          {dict.common.sendRequest}
          <Arrow />
        </button>
        <p className="mt-3">
          <button
            type="button"
            onClick={() => send("whatsapp")}
            className="font-sans text-sm text-bronze underline"
          >
            {dict.common.orSendOnWhatsApp}
          </button>
        </p>
      </div>
    </form>
  );
}

function Text({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  dir,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  dir?: "ltr";
}) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        dir={dir}
        autoComplete={autoComplete}
        className="field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
