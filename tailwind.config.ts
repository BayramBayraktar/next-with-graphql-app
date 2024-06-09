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
      animation: {
        down: "down 0.2s ease-out"
      },

      keyframes: {
        down: {
          "0%": {
            transform: "translateY(-10%)",
            opacity: "0",
            
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
