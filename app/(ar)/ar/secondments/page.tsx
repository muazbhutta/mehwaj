import type { Metadata } from "next";
import SecondmentsPage from "@/components/secondments/SecondmentsPage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "ar",
  "/secondments",
  getDictionary("ar").secondments.meta
);

export default function Page() {
  return <SecondmentsPage locale="ar" />;
}
