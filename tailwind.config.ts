// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        cardo: ["Cardo", "serif"],
      },
      colors: {
        lightBackground: "#ffffff", 
        darkBackground: "#1a202c", 
        lightText: "#000000", 
        darkText: "#f7fafc",
      },
    },
  },
  plugins: [],
};

export default config;
