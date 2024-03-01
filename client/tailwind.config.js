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
			flex: {
				"01": "0 1 10%",
				"02": "0 1 20%",
				"03": "0 1 30%",
				"04": "0 1 40%",
				"05": "0 1 50%",
				"06": "0 1 60%",
				"07": "0 1 70%",
				"08": "0 1 80%",
			},
		},
	},
	plugins: [],
};
