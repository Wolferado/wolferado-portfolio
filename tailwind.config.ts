import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
			colors: {
				...colors,
				custom_text: {
					50: '#110f09',
					100: '#221f11',
					200: '#443d22',
					300: '#665c33',
					400: '#887a44',
					500: '#aa9955',
					600: '#bbad77',
					700: '#ccc299',
					800: '#ddd6bb',
					900: '#eeebdd',
					950: '#f6f5ee',
				},
				background: {
					50: '#0e0911',
					100: '#1b1122',
					200: '#362244',
					300: '#523366',
					400: '#6d4488',
					500: '#8855aa',
					600: '#a077bb',
					700: '#b899cc',
					800: '#cfbbdd',
					900: '#e7ddee',
					950: '#f3eef6',
				},
				primary: {
					50: '#100713',
					100: '#1f0e25',
					200: '#3f1b4b',
					300: '#5e2970',
					400: '#7e3696',
					500: '#9d44bb',
					600: '#b169c9',
					700: '#c48fd6',
					800: '#d8b4e4',
					900: '#ebdaf1',
					950: '#f5ecf8',
				},
				secondary: {
					50: '#0b0614',
					100: '#150c27',
					200: '#2b174f',
					300: '#402376',
					400: '#552f9d',
					500: '#6b3bc4',
					600: '#8862d0',
					700: '#a689dc',
					800: '#c4b0e8',
					900: '#e1d8f3',
					950: '#f0ebf9',
				},
				accent: {
					50: '#070415',
					100: '#0e092a',
					200: '#1c1254',
					300: '#2a1b7e',
					400: '#3824a8',
					500: '#452dd2',
					600: '#6b57db',
					700: '#9081e4',
					800: '#b5abed',
					900: '#dad5f6',
					950: '#eceafb',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
