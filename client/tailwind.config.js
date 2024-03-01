/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			color: {
				purple: "#6100C2",
				lightPurple: "#7900C2",
				black: "#37312A",
				lightGray: "#cecaca",
				gray: "#8e8e8e",
				white: "#ffffff",
			},
			backgroundColor: {
				purple: "#6100C2",
				lightPurple: "#7900C2",
				black: "#37312A",
				lightGray: "#cecaca",
				gray: "#8e8e8e",
				white: "#ffffff",
			},
		},
	},
	plugins: [],
};
