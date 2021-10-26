module.exports = {
	// mode: 'jit', // still in preview
	purge: {
		content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
		options: {
			keyframes: true,
		},
	},
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				long: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
			},
			animation: {
				long: 'long 2s ease-in-out',
				clock: 'spin 1s ease-in-out 2s',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
		},
	},
	plugins: [],
}
