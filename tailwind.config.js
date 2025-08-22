/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['selector', '[data-theme="dark"]'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#B713FF',
				// primaryBtn: '#F1943C',
				// primaryBtnText: '#353232',
				// primaryBg: '#353232', // 元件主底色; #D4CBCC(原)
				secondary: '#2C2C2C',
				// primaryText: '#dfe6e9',
				// highlightColor: '#9cc9f0',
				// headerBg: '#2C2C2C', // #D4CBCCD4(透明度83%) #D4CBCCFF (透明0)
				// footerBg: '#1C1B1B', // #C42E3A //#B52F3A
				// websiteBgStart: '#353232',
				// websiteBgEnd: '#100F0F',
			},
			transitionProperty: {
				'max-height': 'max-height',
				display: 'display',
			},
		},
	},
	variants: {
		extend: {
			spacing: ['responsive'], // 確保 spacing 可以響應式調整
		},
	},
	plugins: [
		'prettier-plugin-tailwindcss',
		require('tailwindcss/plugin')(({ addVariant }) => {
			addVariant('search-cancel', '&::-webkit-search-cancel-button');
		}),
	],
};
