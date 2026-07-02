import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        slate: {
          850: "#172033",
          950: "#0b1220",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        grid: `linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)`,
      },
    },
  },
  plugins: [],
};

export default config;
