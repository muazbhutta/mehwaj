// ============================================================================
// Fonts, self hosted through next/font so there is no render blocking request.
// Playfair Display for headings, Inter for body, Great Vibes for the script
// line, and IBM Plex Sans Arabic for every Arabic page.
// ============================================================================

import {
  Playfair_Display,
  Inter,
  Great_Vibes,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-greatvibes",
  weight: ["400"],
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-plex-arabic",
  weight: ["400", "500", "600", "700"],
});

export const latinFontVars = `${playfair.variable} ${inter.variable} ${greatVibes.variable}`;
export const arabicFontVars = `${latinFontVars} ${plexArabic.variable}`;
