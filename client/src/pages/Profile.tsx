import { Helmet } from "react-helmet";
import { Nav } from "../components";

export const Profile = () => {
	return (
		<div>
			<Helmet>
				<title>Strimiera | Profile</title>
			</Helmet>
			<div id="container" className="flex min-h-screen flex-row w-full">
				<Nav />
				<main className="flex-1 border-2 border-red-300 transition-all duration-200 ease-out">
					content
				</main>
			</div>
		</div>
	);
};
