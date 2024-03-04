import { Helmet } from "react-helmet";
import { Main, Nav } from "../components";
import { User, useUserStore } from "../store";
import { parseCookie, removeCookie } from "../features";
import { useEffect } from "react";

import { redirect } from "@tanstack/react-router";
import { ROUTES } from "../common";

export const Profile = () => {
	const { id, email, name, setUser } = useUserStore((state) => state);

	useEffect(() => {
		if (!id || !email || !name) {
			const user = parseCookie("strimiera_user") as User;

			if (!user) {
				removeCookie();
				throw redirect({
					to: ROUTES.home,
				});
			}

			setUser(user);
		}
	}, []);

	return (
		<div>
			<Helmet>
				<title>Strimiera | Watch</title>
			</Helmet>
			<div id="container" className="flex min-h-screen flex-row w-full">
				<Nav />
				<Main/>
			</div>
		</div>
	);
};
