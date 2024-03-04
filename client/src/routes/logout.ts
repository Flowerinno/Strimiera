import { createFileRoute, redirect } from "@tanstack/react-router";
import { Logout } from "../pages";
import { ROUTES, TOAST } from "../common";

import { getToken, removeCookie } from "../features";

export const Route = createFileRoute("/logout")({
	component: Logout,
	beforeLoad: async () => {
		const token = getToken();

		if (!token) {
			TOAST.error("You are not logged in.");
			throw redirect({
				to: ROUTES.home,
			});
		}

		const res = confirm("Are you sure you want to logout?");
		if (res) {
			TOAST.error("You have been logged out.");
			removeCookie();
			throw redirect({
				to: ROUTES.home,
			});
		}

		throw redirect({
			to: ROUTES.profile,
		});
	},
});
