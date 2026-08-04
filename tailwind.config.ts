import type { Config } from "tailwindcss";

/**
 * Dizayn tizimi: darslink.uz — neo-brutalist / Swiss-editorial.
 * Qoidalar (darslink-dizayn.md, 10.2):
 *   1. Radius = 0 (hamma joyda)
 *   2. Chegara = matn rangi, 2px
 *   3. Bo'shliq emas — umumiy chiziqlar (gap-* ishlatilmaydi)
 *   4. Soya blursiz: shadow-[6px_6px_0_0_var(--foreground)]
 *   5. Hover = inversiya: hover:bg-foreground hover:text-background
 */
const config: Config = {
  darkMode: ["class", ".dl-editorial-dark"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Radius butunlay o'chirilgan — uslubning 1-qoidasi.
    borderRadius: {
      none: "0",
      DEFAULT: "0",
      sm: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "9999px", // faqat marquee/loader kabi maxsus holatlar uchun
    },
    extend: {
      colors: {
        background: "var(--background)",
        "background-subtle": "var(--background-subtle)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        "border-soft": "var(--border-soft)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-soft": "var(--primary-soft)",
        accent: "var(--accent)",
        highlight: "var(--highlight)",
        ring: "var(--ring)",
      },
      fontFamily: {
        clash: ['"Clash Display"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        2: "2px",
        3: "3px",
      },
      height: {
        13: "3.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "page-in": {
          "0%": { opacity: "0", transform: "translateY(22px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "badge-pop": {
          "0%": { opacity: "0", transform: "scale(0.4) rotate(-8deg)" },
          "60%": { opacity: "1", transform: "scale(1.12) rotate(3deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        "arrow-nudge": {
          "0%, 100%": { transform: "translate(-1.5px, 1.5px)" },
          "50%": { transform: "translate(2px, -2px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "page-in": "page-in 0.5s cubic-bezier(0.22,1,0.36,1)",
        marquee: "marquee 28s linear infinite",
        "badge-pop": "badge-pop 0.45s cubic-bezier(0.34,1.56,0.64,1)",
        "arrow-nudge": "arrow-nudge 1.15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
