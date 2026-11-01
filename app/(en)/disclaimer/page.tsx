import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "en",
  "/disclaimer",
  getDictionary("en").legal.disclaimer.meta
);

export default function Page() {
  return <LegalPage locale="en" slug="disclaimer" />;
}
