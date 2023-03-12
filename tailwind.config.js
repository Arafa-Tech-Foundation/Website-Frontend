const theme = {
	tertiary: "#c2c2d6",
	primary: "#a48cff",
	neutral: "#21202e",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
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
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
