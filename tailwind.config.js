import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ['dark'],
	corePlugins: {
		aspectRatio: false
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: {
					DEFAULT: 'var(--background)',
					secondary: 'var(--background-secondary)',
					tertiary: 'var(--background-tertiary)'
				},
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					50: '#EBEDFF',
					100: '#D6DAFF',
					200: '#A8B1FF',
					300: '#808CFF',
					400: '#5263FF',
					500: '#283CFF',
					600: '#0017EB',
					700: '#0012B3',
					800: '#000C75',
					900: '#00063D'
				}
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				satoshi: ['Satoshi', 'sans']
			}
		}
	}
};

export default config;
