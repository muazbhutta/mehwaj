import type { Metadata } from "next";
import CityLanding from "@/components/CityLanding";
import { CITIES } from "@/lib/constants";

const city = CITIES.find((c) => c.slug === "islamabad")!;

export const metadata: Metadata = {
  title: "Chartered Accountant in Islamabad | Audit & Tax — MW & Co.",
  description:
    "Chartered accountant in Islamabad offering audit, FBR tax compliance, company registration & advisory for corporates, IT firms and NGOs. MW & Co. — Commitment to Excellence.",
  alternates: { canonical: "/chartered-accountant-islamabad" },
  openGraph: {
    title: "Chartered Accountant in Islamabad | Audit & Tax — MW & Co.",
    description:
      "Audit, tax, accounting & advisory services in Islamabad from MW & Co., Chartered Accountants.",
    url: "/chartered-accountant-islamabad",
  },
};

export default function IslamabadPage() {
  return <CityLanding city={city} />;
}
