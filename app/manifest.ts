import type { MetadataRoute } from "next";
import { FIRM } from "@/lib/site";
import { getDictionary } from "@/lib/i18n";

// /manifest.webmanifest
export default function manifest(): MetadataRoute.Manifest {
  const dict = getDictionary("en");

  return {
    name: FIRM.fullName,
    short_name: FIRM.name,
    description: dict.home.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#2B1B10",
    theme_color: "#2B1B10",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
