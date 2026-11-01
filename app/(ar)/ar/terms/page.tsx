import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "ar",
  "/terms",
  getDictionary("ar").legal.terms.meta
);

export default function Page() {
  return <LegalPage locale="ar" slug="terms" />;
}
