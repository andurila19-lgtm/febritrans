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
          navy: "#0F2547",
          "navy-dark": "#0A1A33",
          "navy-light": "#1A365D",
          blue: "#0463bf",
          "blue-hover": "#034e96",
          cyan: "#01abe8",
          orange: "#f7630c",
          "orange-hover": "#e55500",
          gold: "#C89D42",
          "gold-hover": "#B38932",
          "gold-light": "#F6E8C3",
          emerald: "#059669",
          slate: "#1E293B",
          "slate-dark": "#0F172A",
          body: "#334155",
          muted: "#64748B",
          border: "#E2E8F0",
          bg: "#F8FAFC",
        },
        section: {
          warm: "#FFFBF5",
          "blue-tint": "#F0F4FF",
          "slate-light": "#F1F5F9",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
        sans: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0px 10px 25px -5px rgba(15, 37, 71, 0.06)",
        "card-hover": "0px 20px 30px -10px rgba(15, 37, 71, 0.12)",
        "card-glow": "0px 0px 30px -5px rgba(4, 99, 191, 0.15)",
        button: "0px 10px 20px -5px rgba(15, 37, 71, 0.25)",
        gold: "0px 10px 20px -5px rgba(200, 157, 66, 0.3)",
        "dark-card": "0px 8px 24px rgba(0, 0, 0, 0.2)",
        "glow-blue": "0 0 40px rgba(4, 99, 191, 0.2)",
        "glow-cyan": "0 0 40px rgba(1, 171, 232, 0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "slide-up": "slideUp 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.15)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #0F2547 0%, #0463bf 100%)",
        "gradient-blue": "linear-gradient(135deg, #0463bf 0%, #0284c7 100%)",
        "gradient-cyan": "linear-gradient(135deg, #0463bf 0%, #01abe8 100%)",
        "gradient-dark": "linear-gradient(180deg, #0F2547 0%, #0A1A33 100%)",
        "gradient-warm": "linear-gradient(180deg, #F8FAFF 0%, #F0F4FF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
