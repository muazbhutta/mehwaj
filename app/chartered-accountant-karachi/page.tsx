import type { Metadata } from "next";
import CityLanding from "@/components/CityLanding";
import { CITIES } from "@/lib/constants";

const city = CITIES.find((c) => c.slug === "karachi")!;

export const metadata: Metadata = {
  title: "Chartered Accountant in Karachi | Audit & Tax — MW & Co.",
  description:
    "Chartered accountant in Karachi offering audit, tax consultation, business valuation & advisory for corporates and SMEs. MW & Co. — Commitment to Excellence.",
  alternates: { canonical: "/chartered-accountant-karachi" },
  openGraph: {
    title: "Chartered Accountant in Karachi | Audit & Tax — MW & Co.",
    description:
      "Audit, tax, accounting & advisory services in Karachi from MW & Co., Chartered Accountants.",
    url: "/chartered-accountant-karachi",
  },
};

export default function KarachiPage() {
  return <CityLanding city={city} />;
}
