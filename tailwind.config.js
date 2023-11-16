const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '420px',
			},
			colors: {
				primary: 'hsl(var(--primary))',
				border: 'hsl(var(--border))',
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					secondary: 'hsl(var(--foreground-secondary))',
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					tertiary: 'hsl(var(--background-tertiary))',
				},
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
			gridTemplateColumns: {
				cards: 'repeat(auto-fill, minmax(170px, 1fr))',
				"cards-mobile": 'repeat(auto-fill, minmax(140px, 1fr))'
			},
			keyframes: {
				'spin-delayed': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)'},
				},
			},
			animation: {
				'spin-delayed': 'spin-delayed 3s linear infinite',
			},
		},
	},
	plugins: [],
};
