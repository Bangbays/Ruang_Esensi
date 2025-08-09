// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Sage Green from your file
        primary: {
          DEFAULT: "#7A8471",
          "50": "#F4F5F3",
          "100": "#E8EAE6",
          "200": "#D1D5CC",
          "300": "#BAC0B3",
          "400": "#A3A999",
          "500": "#7A8471",
          "600": "#6B7562",
          "700": "#5C6653",
          "800": "#4D5744",
          "900": "#3E4835",
        },
        // Secondary Colors - Warm Beige from your file
        secondary: {
          DEFAULT: "#D4C5B0",
          "50": "#FDFCFA",
          "100": "#FAF8F4",
          "200": "#F5F1E9",
          "300": "#F0EADE",
          "400": "#EBE3D3",
          "500": "#D4C5B0",
          "600": "#C4B49E",
          "700": "#B4A38C",
          "800": "#A4927A",
          "900": "#948168",
        },
        // Accent Colors - Wood Brown from your file
        accent: {
          DEFAULT: "#8B4513",
          "50": "#F7F2ED",
          "100": "#EFE5DB",
          "200": "#DFCBB7",
          "300": "#CFB193",
          "400": "#BF976F",
          "500": "#8B4513",
          "600": "#7D3E11",
          "700": "#6F370F",
          "800": "#61300D",
          "900": "#53290B",
        },
        // Background, Text, Status, and Border colors from your file
        background: "#FEFEFE",
        surface: "#F8F6F3",
        "text-primary": "#2C2C2C",
        "text-secondary": "#6B6B6B",
        success: "#5D7C47",
        warning: "#B8860B",
        error: "#8B4B47",
        border: {
          light: "#E8E5E0",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "source-sans": ["var(--font-source-sans-pro)", "sans-serif"],
        crimson: ["var(--font-crimson-text)", "serif"],
      },
      boxShadow: {
        cta: "0 4px 12px rgba(0,0,0,0.08)",
        card: "0 2px 8px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
