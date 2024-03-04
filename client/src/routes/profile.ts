import { createFileRoute, redirect } from "@tanstack/react-router";
import { Profile } from "../pages";
import { getToken } from "../features";
import { ROUTES } from "../common";

export const Route = createFileRoute("/profile")({
	component: Profile,
	beforeLoad: async () => {
		const token = getToken();

		if (!token) {
			throw redirect({
				to: ROUTES.home,
			});
		}
	},
});
