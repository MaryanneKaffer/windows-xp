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
        'startUp1': "linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 30%, rgb(29, 72, 165) 70%)",
        'startUp2': "linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 40%, rgb(29, 72, 165) 60%)",
        'startUp3': "linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 45%, rgb(29, 72, 165) 55%)",
        'desktop': "url('/desktopImage/bliss.jpg')",
        'taskBar': "linear-gradient(to bottom,rgb(108, 152, 255) 0%, #245DDA 18%)",
        'startButton': "linear-gradient(to bottom, rgb(74, 201, 84) 0%, rgb(31, 184, 64) 18%, rgb(35, 128, 26) 90%)",
        'systemTray': "linear-gradient(to bottom, rgb(108, 189, 255) 0%,rgb(45, 153, 255) 18%)",

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
        winXpBlue: "#245DDA"
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
