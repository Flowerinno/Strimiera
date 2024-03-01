import { createFileRoute, redirect } from "@tanstack/react-router";
import { Register } from "../pages";
import { getCookie } from "../features";
import { ROUTES } from "../common";

export const Route = createFileRoute("/register")({
	component: Register,
	beforeLoad: async () => {
		const cookie = getCookie();
		if (cookie) {
			throw redirect({
				to: ROUTES.profile,
			});
		}
	},
});
