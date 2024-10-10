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
      backgroundImage: {
        dashedBorder: `urlurl("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23333' stroke-width='2' stroke-dasharray='6%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");`,
      },
    },
  },
  plugins: [],
};
export default config;
