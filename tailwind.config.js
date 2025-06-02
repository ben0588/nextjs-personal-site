/** @type {import('tailwindcss').Config} */
module.exports = {
	// darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#FFD81A', // #CC7D34 // #F1943C // #F1943C
				primaryBtn: '#F1943C',
				primaryBtnText: '#353232',
				primaryBg: '#353232', // 元件主底色; #D4CBCC(原)
				secondary: '#2C2C2C',
				primaryText: '#dfe6e9',
				highlightColor: '#9cc9f0',
				headerBg: '#2C2C2C', // #D4CBCCD4(透明度83%) #D4CBCCFF (透明0)
				footerBg: '#1C1B1B', // #C42E3A //#B52F3A
				websiteBgStart: '#353232',
				websiteBgEnd: '#100F0F',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 90deg at 50% 50%, var(--tw-gradient-stops))',
			},
			transitionProperty: {
				'max-height': 'max-height',
				display: 'display',
			},
			margin: {
				30: '7.8rem',
			},
			// spacing: {
			//     4.5: 'calc((100% - 16px) / 4.5)',
			//     2.5: 'calc((100% - 16px) / 2.5)',
			//     1.5: 'calc((100% - 16px) / 1.5)',
			// },
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
