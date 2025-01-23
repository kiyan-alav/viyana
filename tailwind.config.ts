import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          50: "#212121",
          100: "#5a5a5a",
          200: "#292929",
          300: "#F9F9F9",
          400: "#E9ECEF",
          500: "#FFD700",
          600: "#808080",
        }
      },
      fontFamily: {
        Dana: ["Dana", "Tahoma", "Arial", "sans-serif"],
      },
    },
  },
  important: true,
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
