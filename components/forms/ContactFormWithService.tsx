"use client";

// ============================================================================
// The contact page form. When the URL carries ?service=<slug>, for example
// from a service page CTA, the message starts with that service name.
// ============================================================================

import { useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export default function ContactFormWithService({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const params = useSearchParams();
  const slug = params.get("service");
  const service = slug ? dict.services[slug] : undefined;

  return (
    <ContactForm
      locale={locale}
      dict={dict}
      selectLabel={dict.common.form.servicesLabel}
      selectOptions={dict.common.servicesOptions}
      initialMessage={
        service ? `${dict.contact.enquiryPrefix} ${service.title}` : ""
      }
    />
  );
}
