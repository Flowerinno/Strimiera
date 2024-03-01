import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite(), react()],
	resolve: {
		alias: {
			"react-redux": "react-redux/dist/react-redux.js",
		},
	},
});
