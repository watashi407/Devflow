import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF1E6",
          500: "#FF7000",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#3F4354",
          "custom-gradient": "linear-gradient(90deg, #171C2368, #13161CB2)",
        },
        light: {
          900: "#FFFFFF",
          850: "#FDFDFD",
          800: "#F4F6F8",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
      },
      spacing: {},
      screens: {
        xs: "26.25rem", // 420px / 16
        sm: "40rem", // 640px / 16
        md: "48rem", // 768px / 16
        lg: "64rem", // 1024px / 16
        xl: "80rem", // 1280px / 16
        "2xl": "96rem", // 1536px / 16
        mobile: "26.25rem", // 420px / 16
        tablet: "40rem", // 640px / 16
        laptop: "64rem", // 1024px / 16
        desktop: "80rem", // 1280px / 16
      },
      borderRadius: {
        "2": "0.5rem", // 8px / 16 = 0.5rem
        "1.5": "0.375rem", // 6px / 16 = 0.375rem
        lg: "var(--radius)", // Keep as is
        md: "calc(var(--radius) - 0.125rem)", // 2px / 16 = 0.125rem
        sm: "calc(var(--radius) - 0.25rem)", // 4px / 16 = 0.25rem
      },
      boxShadow: {
        "light-100":
          "0px 0.75rem 1.25rem 0px rgba(184, 184, 184, 0.03), " +
          "0px 0.375rem 0.75rem 0px rgba(184, 184, 184, 0.02), " +
          "0px 0.125rem 0.25rem 0px rgba(184, 184, 184, 0.03)", // 12px, 6px, 2px to rem
        "light-200": "0.625rem 0.625rem 1.25rem 0px rgba(218, 213, 213, 0.10)", // 10px to rem
        "light-300": "-0.625rem 0.625rem 1.25rem 0px rgba(218, 213, 213, 0.10)", // -10px to rem
        "dark-100": "0px 0.125rem 0.625rem 0px rgba(46, 52, 56, 0.10)", // 2px, 10px to rem
        "dark-200": "0.125rem 0px 1.25rem 0px rgba(39, 36, 36, 0.04)", // 2px, 20px to rem
      },
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
