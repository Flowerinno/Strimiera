import { createFileRoute, redirect } from "@tanstack/react-router";
import { Profile } from "../pages";
import { getCookie } from "../features";
import { ROUTES } from "../common";

export const Route = createFileRoute("/profile")({
	component: Profile,
	beforeLoad: async () => {
		const token = getCookie();

		if (!token) {
			throw redirect({
				to: ROUTES.home,
			});
		}
	},
});
