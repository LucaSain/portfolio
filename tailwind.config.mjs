/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#373737",

					secondary: "#373737",

					accent: "#373737",

					neutral: "#373737",

					"base-100": "#000000",

					info: "#0000ff",

					success: "#008000",

					warning: "#ffff00",

					error: "#ff0000",
				},
			},
		],
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
}
