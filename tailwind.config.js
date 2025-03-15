const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/windowsXp/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'startUp1': "linear-gradient(to bottom,rgb(27, 44, 92),rgb(218, 218, 218) 30%, rgb(27, 44, 92) 100%)",
        'startUp2': "linear-gradient(to bottom,rgb(27, 44, 92),rgb(218, 218, 218) 40%, rgb(27, 44, 92) 100%)",
        'startUp3': "linear-gradient(to bottom,rgb(27, 44, 92),rgb(218, 218, 218) 50%,rgb(27, 44, 92) 100%)",
        'desktop': "url('/desktopImage/bliss.jpg')" 
      },
      backgroundSize: {
        'cover': 'cover',
        'contain': 'contain',
      },
      keyframes: {
        moving: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        moving: "moving 2s steps(20, end) infinite"
      },
      colors: {
        loadBlue: "#3C59A9",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        tahoma: ["var(--font-tahoma)"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
