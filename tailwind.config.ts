import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A", // slate-900 (crisp, elegant deep slate)
          charcoal: "#1E293B", // slate-800
          body: "#334155", // slate-700
          muted: "#64748B", // slate-500
          subtle: "#94A3B8", // slate-400
          border: "#E2E8F0", // slate-200
          surface: "#F8FAFC", // slate-50 (fresh bright surface)
          bg: "#FFFFFF", // pure crisp white
          primary: "#0284C7", // sky-600 (cheerful vibrant sky blue)
          "primary-hover": "#0369A1", // sky-700
          "primary-light": "#E0F2FE", // sky-100
          accent: "#0284C7", // vibrant cheerful sky-600
          "accent-hover": "#0369A1", // sky-700
          "accent-light": "#E0F2FE", // sky-100
          sun: "#F59E0B", // amber-500 (cheerful warm sunny gold)
          "sun-hover": "#D97706", // amber-600
          "sun-light": "#FEF3C7", // amber-100
          green: "#16A34A", // emerald-600 (vibrant WhatsApp green)
          "green-hover": "#15803D", // emerald-700
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
        sans: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -4px rgba(12, 10, 9, 0.06)",
        "card-hover": "0 12px 30px -6px rgba(12, 10, 9, 0.12)",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
