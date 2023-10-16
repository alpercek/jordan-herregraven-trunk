const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = {
	...defaultTheme.fontFamily,
	sans: ['Reckless Neue', 'Open Sans', 'sans-serif'],
}

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily,
    screens: {
      xs: "375px",
      ...defaultTheme.screens
    },
		extend: {
			colors: {
			  'lines': 'rgb(30 30 30)',
			  'fonts': 'rgb(30 30 30)',
			  'fonts-invert': 'rgb(255 255 255)',
			  'background': 'rgb(255 255 255)',
			},
			margin: {
				'1px': '1px',
				'2px': '2px',
			},
			height: {
				'100vw': '100vw',
				'90vw': '90vw',
				'80vw': '80vw',
				'70vw': '70vw',
				'60vw': '60vw',
				'50vw': '50vw',
				'40vw': '40vw',
				'30vw': '30vw',
				'20vw': '20vw',
				'10vw': '10vw',
				'screen+1': 'calc(100vh + 1px)' // This can be used if you want to get the scrolling direction but the page is fullscreen
			},
		}
	},
	variants: {
		extend: {},
	},
		plugins: [
	]
}