import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        neutral: "hsl(var(--neutral) / <alpha-value>)"
      },
      fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] },
      borderRadius: { xl: "var(--radius)", "2xl": "calc(var(--radius) + 8px)" },
      boxShadow: { soft: "0 8px 30px rgba(15, 23, 42, 0.06)" }
    }
  },
  plugins: []
};

export default config;
