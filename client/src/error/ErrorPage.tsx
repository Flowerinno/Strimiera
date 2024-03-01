import { Link } from "@tanstack/react-router";
import { Text } from "../components/ui/Text";
import { Helmet } from "react-helmet";

export const ErrorPage = () => {
	return (
		<div className="font-bold w-screen h-screen flex flex-col justify-center items-center bg-[url('../assets//images/HomeSceen.png')] no-repeat bg-cover bg-center bg-lightPurple">
			<Helmet>
				<title>Strimiera | Error</title>
			</Helmet>
			<div className="flex flex-col items-center justify-center text-white gap-7">
				<Text
					text="Ooops... Something's broken or current path doesn't exist, but don't you worry, we'll fix it!"
					className="font-bold text-2xl break-words w-9/12 text-center"
				/>
				<Link className="button w-96" to="/">
					Go Back
				</Link>
			</div>
		</div>
	);
};
