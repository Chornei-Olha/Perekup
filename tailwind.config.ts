import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1430px",
      },
    },
    extend: {
      fontFamily: {
        plusjakarta: ["var(--font-plusjakarta)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
        opensans: ["var(--font-opensans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
