import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
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
      // fontFamily: {
      //   inter: ["var(--font-inter)"],
      //   jakarta: ["var(--font-plus-jakarta-sans)"],
      //   manrope: ["var(--font-manrope)"],
      //   sans: ["var(--font-open-sans)"],
      // },
    },
  },
  plugins: [],
};

export default config;
