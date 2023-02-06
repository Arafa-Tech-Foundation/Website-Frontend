const theme = {
	primary: "#588157",

	secondary: "#a68a64",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	daisyui: {
		styled: true,
		themes: [
			{
				light: { ...theme, "base-100": "#FFFFFF" },
			},
			{
				dark: { ...theme, "base-100": "#2A303C" },
			},
		],
		base: true,
		utils: true,
		rtl: false,
		prefix: "",
		logs: process.env.NODE_ENV === "development",
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
