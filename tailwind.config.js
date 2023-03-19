const plugin = require("tailwindcss/plugin");

const theme = {
	primary: "#a48cff",
	secondary: "#383d49",
	neutral: "#21202e",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			textShadow: {
				DEFAULT: "hsl(var(--p)) 0 0 100px",
			},
			letterSpacing: {
				tightest: "-.06em",
			},
			gradientColorStops: {
				"gradient-start": "hsl(var(--p))",
				"gradient-end": "#46266D",
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
