const { heroui, divider } = require("@heroui/theme");

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
				startUp1: 'linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 30%, rgb(29, 72, 165) 70%)',
				startUp2: 'linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 40%, rgb(29, 72, 165) 60%)',
				startUp3: 'linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 45%, rgb(29, 72, 165) 55%)',

				//Windows XP Theme
				winXpTaskBar: 'linear-gradient(to bottom,rgb(108, 152, 255) 0%, #245DDA 18%, #245DDA 90%, rgb(21, 55, 128) 99%)',
				winXpStartButton: 'linear-gradient(to bottom, rgb(74, 201, 84) 0%, rgb(31, 184, 64) 18%, rgb(35, 128, 26) 90%)',
				winXpSystemTray: 'linear-gradient(to bottom, rgb(108, 189, 255) 0%,rgb(45, 153, 255) 18%, rgb(45, 153, 255) 90%, rgb(27, 93, 155) 99%)',
				winXpWindow: 'linear-gradient(to bottom,rgb(159, 188, 255) 0%,#245DDA 1%,rgb(255, 255, 255) 50%, #245DDA 99%)',
				winXpStartmenu: 'linear-gradient(to bottom,rgb(159, 188, 255) 0%,#245DDA 1%,rgb(255, 255, 255) 50%, #245DDA 99%)',

				//Zune Theme
				zuneTaskBar: 'linear-gradient(to bottom,rgb(75, 75, 75) 0%,rgb(75, 75, 75) 45%, rgb(53, 53, 53) 50%)',
				zuneStartButton: 'linear-gradient(to bottom, rgb(255, 121, 59) 0%, rgb(114, 37, 1) 50%,rgb(110, 36, 1) 55%, rgb(136, 76, 48) 99%)',
				zuneSystemTray: 'linear-gradient(to bottom,rgb(56, 56, 56) 0%,rgb(75, 75, 75) 45%, rgb(54, 54, 54) 45%, rgb(26, 26, 26) 55%)',
				zuneWindow: 'linear-gradient(to bottom,rgb(75, 75, 75) 3.5%,rgb(0, 0, 0) 4.5%, rgb(75, 75, 75) 95.5%, rgb(26, 26, 26) 96.5%,rgb(0, 0, 0) 99%)',
				zuneStartmenu: 'linear-gradient(to bottom,rgb(75, 75, 75) 8%,rgb(0, 0, 0) 9%, rgb(75, 75, 75) 95.5%, rgb(26, 26, 26) 96.5%,rgb(0, 0, 0) 99%)',

				//Lollypop Theme
				lollypopTaskBar: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%,rgb(241, 86, 255)18%, rgb(241, 86, 255) 90%, rgb(101, 46, 105) 99%)',
				lollypopStartButton: 'linear-gradient(to bottom, rgb(243, 113, 255) 0%, rgb(148, 0, 161) 50%,rgb(148, 0, 161) 60%, rgb(168, 91, 175) 99%)',
				lollypopSystemTray: 'linear-gradient(to bottom,rgb(252, 219, 255) 0%,rgb(247, 154, 255) 18%, rgb(247, 154, 255) 90%, rgb(241, 85, 255) 99%)',
				lollypopWindow: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%, rgb(241, 86, 255) 1%,rgb(255, 255, 255) 50%,rgb(241, 86, 255) 99%)',
				lollypopStartmenu: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%,rgb(241, 86, 255) 1%,rgb(255, 255, 255) 50%,rgb(241, 86, 255) 99%)',

				divider: 'linear-gradient(to right, transparent, rgba(182, 182, 182) 50%, transparent)',
				dividerBlue: 'linear-gradient(to right, transparent, rgb(27, 93, 155, 0.4) 50%, transparent)',
			},
			backgroundSize: {
				cover: 'cover',
				contain: 'contain'
			},
			keyframes: {
				moving: {
					'0%': {
						transform: 'translateX(-100px)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				moving: 'moving 2s steps(20, end) infinite'
			},
			colors: {
				loadBlue: '#3C59A9',
				winXpBlue: '#245DDA',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'var(--font-sans)'
				],
				mono: [
					'var(--font-mono)'
				],
				tahoma: [
					'var(--font-tahoma)'
				],
				arial: [
					'Arial',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	darkMode: ["class", "class"],
	plugins: [heroui(), require("tailwindcss-animate")],
};

module.exports = config;
