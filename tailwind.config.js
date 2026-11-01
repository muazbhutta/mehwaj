/** @type {import('tailwindcss').Config} */

// ============================================================================
// M.W. & Co., Chartered Accountants Tailwind configuration
// Brand tokens (luxury espresso brown + metallic gold + warm cream).
// Reuse these tokens across the site instead of hard-coding hex values.
// ============================================================================

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Dark tones ---
        espresso: "#2B1B10", // Primary dark backgrounds, footer
        coffee: "#4A2E1C", // Secondary dark

        // --- Gold family ---
        gold: "#C79A4B", // Primary accent metallic gold
        champagne: "#E5C87E", // Light gold highlights, hover
        bronze: "#A87B33", // Deep gold borders, dividers

        // --- Light tones ---
        cream: "#F7F3EA", // Warm cream / ivory light background
        ivory: "#F1E7DA", // Warm ivory hero watermark background
        offwhite: "#FDFBF7", // Off-white card / surface light

        // --- Text ---
        charcoal: "#2B1B10", // Body text on light (dark charcoal brown)

        // Convenience brand scale for utilities like text-brand-gold, etc.
        brand: {
          espresso: "#2B1B10",
          coffee: "#4A2E1C",
          gold: "#C79A4B",
          champagne: "#E5C87E",
          bronze: "#A87B33",
          cream: "#F7F3EA",
          offwhite: "#FDFBF7",
        },
      },
      fontFamily: {
        // Bound to next/font CSS variables (see app/layout.tsx)
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        script: ["var(--font-greatvibes)", "cursive"],
      },
      backgroundImage: {
        // Signature gold gradient bronze → champagne → gold
        "gold-gradient":
          "linear-gradient(135deg, #A87B33 0%, #E5C87E 50%, #C79A4B 100%)",
        "gold-gradient-vert":
          "linear-gradient(180deg, #A87B33 0%, #E5C87E 50%, #C79A4B 100%)",
        // Soft radial glow used behind the hero portrait
        "gold-radial":
          "radial-gradient(circle at center, rgba(229,200,126,0.35) 0%, rgba(199,154,75,0) 70%)",
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(199, 154, 75, 0.45)",
        "gold-lg": "0 20px 50px -12px rgba(199, 154, 75, 0.55)",
        card: "0 8px 30px -12px rgba(43, 27, 16, 0.18)",
      },
      letterSpacing: {
        label: "0.22em", // generous tracking for all-caps labels
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
