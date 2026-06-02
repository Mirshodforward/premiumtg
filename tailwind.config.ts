import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tg: {
          50: "#eaf6ff",
          100: "#d4ecff",
          200: "#a9d9ff",
          300: "#7cc4ff",
          400: "#46adf5",
          500: "#229ED9",
          600: "#1b87bb",
          700: "#166b96",
          800: "#12526f",
          900: "#0e3a4f",
        },
        ink: {
          900: "#070b14",
          800: "#0b1220",
          700: "#111a2e",
          600: "#18233b",
        },
        gold: "#FFD24C",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-tg":
          "linear-gradient(rgba(34,158,217,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,158,217,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(34,158,217,0.6)",
        card: "0 10px 40px -12px rgba(0,0,0,0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        "pulse-ring": "pulse-ring 2.5s cubic-bezier(0.2,0.6,0.4,1) infinite",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
