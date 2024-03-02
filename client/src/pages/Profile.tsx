import { Helmet } from "react-helmet";
import { Main, Nav } from "../components";

export const Profile = () => {
	return (
		<div>
			<Helmet>
				<title>Strimiera | Watch</title>
			</Helmet>
			<div id="container" className="flex min-h-screen flex-row w-full">
				<Nav />
				<Main />
			</div>
		</div>
	);
};
