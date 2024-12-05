import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme) => ({
				default: {
					css: {
						maxWidth: '100%',
					}
				}
			})
		},
	},
	plugins: [typography],

	theme: {
		extend: {
		  fontFamily: {
			  chau: ['Chau Philomene One', 'sans-serif'],
		  },
		},
	  },
}
