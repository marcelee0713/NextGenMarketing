import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: "#3562FF",
        secondary: "#F5F7FF",
        accent: "#DCE4FF",
        textColor: "#383838",
        textColorAccent: "#666666",
      },
    },
  },
  plugins: [],
};
export default config;
