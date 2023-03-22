const plugin = require("tailwindcss/plugin");

const theme = {
	primary: "#FF5F6D",
	secondary: "#FFC371",
	neutral: "#21202e",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			textShadow: {
				DEFAULT: "hsl(var(--p)) 0 0 75px",
				footer: "hsl(var(--p)) 0 0 10px",
				sm: "hsl(var(--p)) 0 0 40px",
			},
			gradientColorStops: {
				"gradient-start": "hsl(var(--p))",
				"gradient-end": "hsl(var(--s))",
			},
			keyframes: {
				"gradient-foreground-1": {
					"from, 16.667%, to": {
						opacity: "1",
					},
					"33.333%, 83.333%": {
						opacity: "0",
					},
				},
				"gradient-background-1": {
					"from, 16.667%, to": {
						opacity: "0",
					},
					"25%, 91.667%": {
						opacity: "1",
					},
				},
				"gradient-foreground-2": {
					"from, to": {
						opacity: "0",
					},
					"33.333%, 50%": {
						opacity: "1",
					},
					"16.667%, 66.667%": {
						opacity: "0",
					},
				},
				"gradient-background-2": {
					"from, to": {
						opacity: "1",
					},
					"33.333%, 50%": {
						opacity: "0",
					},
					"25%, 58.333%": {
						opacity: "1",
					},
				},
				"gradient-foreground-3": {
					"from, 50%, to": {
						opacity: "0",
					},
					"66.667%, 83.333%": {
						opacity: "1",
					},
				},
				"gradient-background-3": {
					"from, 58.333%, 91.667%, to": {
						opacity: "1",
					},
					"66.667%, 83.333%": {
						opacity: "0",
					},
				},
			},
			animation: {
				"gradient-background-1": "gradient-background-1 8s infinite",
				"gradient-foreground-1": "gradient-foreground-1 8s infinite",
				"gradient-background-2": "gradient-background-2 8s infinite",
				"gradient-foreground-2": "gradient-foreground-2 8s infinite",
				"gradient-background-3": "gradient-background-3 8s infinite",
				"gradient-foreground-3": "gradient-foreground-3 8s infinite",
			},
		},
	},
	daisyui: {
		styled: true,
		themes: [
			{
				dark: { ...theme, "base-100": "#16161f" },
			},
			{
				light: { ...theme, "base-100": "#FFFFFF" },
			},
		],
		base: true,
		utils: true,
		rtl: false,
		prefix: "",
		logs: process.env.NODE_ENV === "development",
	},
	variants: {},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
	],
};
