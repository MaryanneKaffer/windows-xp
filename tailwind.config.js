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
				desktop: "url('/desktopImage/bliss.jpg')",
				taskBar: 'linear-gradient(to bottom,rgb(108, 152, 255) 0%, #245DDA 18%, #245DDA 90%, rgb(21, 55, 128) 99%)',
				startButton: 'linear-gradient(to bottom, rgb(74, 201, 84) 0%, rgb(31, 184, 64) 18%, rgb(35, 128, 26) 90%)',
				systemTray: 'linear-gradient(to bottom, rgb(108, 189, 255) 0%,rgb(45, 153, 255) 18%, rgb(45, 153, 255) 90%, rgb(27, 93, 155) 99%)',
				window: 'linear-gradient(to bottom,rgb(159, 188, 255) 0%,#245DDA 1%,rgb(255, 255, 255) 50%, #245DDA 99%)',
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
