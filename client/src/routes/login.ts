import { createFileRoute, redirect } from "@tanstack/react-router";
import { Login } from "../pages";
import { getCookie } from "../features";
import { ROUTES } from "../common";

export const Route = createFileRoute("/login")({
	component: Login,
	beforeLoad: async () => {
		const cookie = getCookie();
		if (cookie) {
			throw redirect({ to: ROUTES.profile });
		}
	},
});
