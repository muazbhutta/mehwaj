import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "ar",
  "/",
  getDictionary("ar").home.meta
);

export default function Page() {
  return <HomePage locale="ar" />;
}
