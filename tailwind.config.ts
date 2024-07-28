import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "sm": { max: "450px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        appGreen: "#2bfccf",
      },
    },
  },
  plugins: [],
};
export default config;


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "325px" },
    },
    extend: {
      colors: {
        darkblack: "#222831",
        lightblack: "#3c434e",
        darkwhite: "#ffffff",
        lightwhite: "#f7fafc",
        darkgrey: "#787a91",
        lightgrey: "#9ba4b4",
        primaryoff: "#99feff",
        primarylight: "#385cf0",
        primarydark: "#1d4cb0",
        highlight: "#f7f0c2",
        warningoff: "#ff3838",
        discordBg: "#404eed",
        appGreen: "#2bfccf"
      },

      fontFamily: {
        mainfont: ["Inter", "sans-serif"],
        codefont: ["Outfit", "sans-serif"],
        curlfont: ["Quicksand", "sans-serif"],
      },
    },
  },
  extend: {},
  plugins: [],
};