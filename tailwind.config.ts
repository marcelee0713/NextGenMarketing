import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      gridTemplateColumns: {
        myGridTemplate: "repeat(auto-fit, minmax(355px, 1fr))",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        primary: "#3562FF",
        secondary: "#F5F7FF",
        accent: "#DCE4FF",
        textColor: "#383838",
        textColorAccent: "#666666",
        textColorNavSection: "#9398AD",
      },
      boxShadow: {
        nav: "0 8px 12px 0 rgba(0, 0, 0, 0.15)",
        serviceItem: "0 0 6px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
