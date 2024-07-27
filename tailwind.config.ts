import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        almost_black: '#121212', 
        white: '#FFFFFF', 
        light_gray: '#c9c9c9', 
        med_gray: '#5e5e5e', 
        dark_gray: '#171717',
        prim_accent: '#00e3b2', 
        sec_accent: '##4c847c'
      },
    },
  },
  plugins: [],
};
export default config;
