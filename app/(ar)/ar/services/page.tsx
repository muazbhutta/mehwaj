import type { Metadata } from "next";
import ServicesIndexPage from "@/components/services/ServicesIndexPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "ar",
  "/services",
  getDictionary("ar").servicesIndex.meta
);

export default function Page() {
  return <ServicesIndexPage locale="ar" />;
}
