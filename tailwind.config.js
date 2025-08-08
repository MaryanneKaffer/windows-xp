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
			cursor: {
				default: 'url("/cursor/default.cur"), auto',
				pointer: 'url("/cursor/pointer.cur"), auto',
				text: 'url("/cursor/beam_i.cur"), auto',
				wait: 'url("/cursor/wait_i.cur"), auto'
			},
			backgroundImage: {
				startUp1: 'linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 30%, rgb(29, 72, 165) 70%)',
				startUp2: 'linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 40%, rgb(29, 72, 165) 60%)',
				startUp3: 'linear-gradient(to bottom, rgb(29, 72, 165),rgb(186, 195, 216) 45%, rgb(29, 72, 165) 55%)',

				//Windows XP Appearance
				winXpTaskBar: 'linear-gradient(to bottom,rgb(108, 152, 255) 0%, #245DDA 18%, #245DDA 90%, rgb(21, 55, 128) 99%)',
				winXpStartButton: 'linear-gradient(to bottom, rgb(74, 201, 84) 0%, rgb(31, 184, 64) 18%, rgb(35, 128, 26) 90%)',
				winXpSystemTray: 'linear-gradient(to bottom, rgb(108, 189, 255) 0%,rgb(45, 153, 255) 18%, rgb(45, 153, 255) 90%, rgb(27, 93, 155) 99%)',
				winXpWindow: 'linear-gradient(to bottom,rgb(159, 188, 255) 0%,#245DDA 1%,rgb(255, 255, 255) 50%, #245DDA 99%)',
				winXpInactive: 'linear-gradient(to bottom,rgb(159, 188, 255) 0%, rgb(134, 165, 231) 1%,rgb(255, 255, 255) 50%,rgb(134, 165, 231) 99%)',
				winXpStartmenu: 'linear-gradient(to bottom,rgb(159, 188, 255) 0%,#245DDA 1%,rgb(255, 255, 255) 50%, #245DDA 99%)',

				//Zune Appearance
				zuneTaskBar: 'linear-gradient(to bottom,rgb(75, 75, 75) 0%,rgb(75, 75, 75) 45%, rgb(53, 53, 53) 50%)',
				zuneStartButton: 'linear-gradient(to bottom, rgb(255, 107, 39) 0%, rgb(255, 159, 114) 10%, rgb(255, 197, 170) 15%,rgb(255, 121, 59) 40%, rgb(110, 36, 1) 80%, rgb(110, 36, 1)95%, rgb(197, 89, 40)99%)',
				zuneSystemTray: 'linear-gradient(to bottom,rgb(56, 56, 56) 0%,rgb(75, 75, 75) 45%, rgb(54, 54, 54) 45%, rgb(26, 26, 26) 55%)',
				zuneWindow: 'linear-gradient(to bottom,rgb(75, 75, 75) 3.5%,rgb(0, 0, 0) 4.5%, rgb(75, 75, 75) 95.5%, rgb(26, 26, 26) 96.5%,rgb(0, 0, 0) 99%)',
				zuneInactive: 'linear-gradient(to bottom,rgb(122, 122, 122) 3.5%,rgb(73, 73, 73) 4.5%, rgb(75, 75, 75) 95.5%, rgb(26, 26, 26) 96.5%,rgb(0, 0, 0) 99%)',
				zuneStartmenu: 'linear-gradient(to bottom,rgb(75, 75, 75) 8%,rgb(0, 0, 0) 9%, rgb(75, 75, 75) 95.5%, rgb(26, 26, 26) 96.5%,rgb(0, 0, 0) 99%)',

				//Lollypop Appearance
				lollypopTaskBar: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%,rgb(241, 86, 255)18%, rgb(241, 86, 255) 90%, rgb(101, 46, 105) 99%)',
				lollypopStartButton: 'linear-gradient(to bottom,rgb(255, 255, 255) 0%,rgb(161, 163, 187)18%, rgb(162, 164, 187) 50%, rgb(255, 255, 255) 90%, rgb(158, 158, 158) 99%)',
				lollypopSystemTray: 'linear-gradient(to bottom,rgb(252, 219, 255) 0%,rgb(247, 154, 255) 18%, rgb(247, 154, 255) 90%, rgb(241, 85, 255) 99%)',
				lollypopWindow: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%, rgb(241, 86, 255) 1%,rgb(255, 255, 255) 50%,rgb(241, 86, 255) 99%)',
				lollypopInactive: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%, rgb(224, 168, 230) 1%,rgb(255, 255, 255) 50%,rgb(224, 168, 230) 99%)',
				lollypopStartmenu: 'linear-gradient(to bottom,rgb(250, 191, 255) 0%,rgb(241, 86, 255) 1%,rgb(255, 255, 255) 50%,rgb(241, 86, 255) 99%)',

				//Silver Appearance
				silverTaskBar: 'linear-gradient(to bottom,rgb(255, 255, 255) 0%,rgb(161, 163, 187)18%, rgb(162, 164, 187) 50%, rgb(255, 255, 255) 90%, rgb(158, 158, 158) 99%)',
				silverStartButton: 'linear-gradient(to bottom, rgb(6, 173, 0) 0%, rgb(178, 255, 168) 10%, rgb(255, 255, 255) 15%,rgb(6, 168, 0) 40%, rgb(3, 102, 0) 80%, rgb(4, 116, 0) 95%, rgb(5, 160, 0) 99%)',
				silverSystemTray: 'linear-gradient(to bottom,rgb(255, 255, 255) 0%, rgb(255, 255, 255) 20%, rgb(161, 163, 187) 60%)',
				silverWindow: 'linear-gradient(to bottom,rgb(255, 255, 255), rgb(161, 163, 187) 1%,rgb(255, 255, 255) 6%, rgb(255, 255, 255) 92%,rgb(148, 150, 175) 99%)',
				silverInactive: 'linear-gradient(to bottom,rgb(255, 255, 255), rgb(184, 187, 214) 1%,rgb(255, 255, 255) 6%, rgb(255, 255, 255) 92%,rgb(179, 181, 211) 99%)',
				silverStartmenu: 'linear-gradient(to bottom,rgb(255, 255, 255), rgb(148, 150, 175) 1%,rgb(255, 255, 255) 13%, rgb(255, 255, 255) 92%,rgb(148, 150, 175) 99%)',

				//Olive Green Appearance
				oliveTaskBar: 'linear-gradient(to bottom,rgb(238, 238, 238) 0%, rgb(180, 202, 148) 18%, rgb(180, 202, 148) 90%, rgb(90, 100, 74) 99%)',
				oliveStartButton: 'linear-gradient(to bottom, rgb(146, 196, 146) 0%, rgb(144, 201, 136) 10%, rgb(255, 255, 255) 15%,rgb(106, 145, 104) 40%, rgb(79, 105, 78) 80%, rgb(90, 114, 90) 95%, rgb(118, 156, 116) 99%)',
				oliveSystemTray: 'linear-gradient(to bottom,rgb(243, 255, 172) 0%, rgb(243, 255, 172) 20%, rgb(197, 196, 115) 99%)',
				oliveWindow: 'linear-gradient(to bottom,rgb(255, 255, 255), rgb(180, 202, 148)  1%,rgb(180, 202, 148)  6%, rgb(255, 255, 255) 92%,rgb(180, 202, 148)  99%)',
				oliveInactive: 'linear-gradient(to bottom,rgb(255, 255, 255), rgb(208, 230, 176)  1%,rgb(214, 233, 186)  6%, rgb(255, 255, 255) 92%,rgb(208, 231, 173)  99%)',
				oliveStartmenu: 'linear-gradient(to bottom,rgb(255, 255, 255), rgb(173, 192, 142) 1%,rgb(207, 231, 170) 13%, rgb(180, 202, 148) 92%,rgb(180, 202, 148) 99%)',

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
