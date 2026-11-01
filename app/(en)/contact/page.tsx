import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "en",
  "/contact",
  getDictionary("en").contact.meta
);

export default function Page() {
  return <ContactPage locale="en" />;
}
