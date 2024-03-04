import Logo from "../assets/images/Logo.png";
import { ROUTES } from "../common";
import { Image } from "../components";
import { Text } from "../components/ui/Text";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet";

export const Home = () => {
	return (
		<div className="font-bold w-screen h-screen flex flex-col justify-center items-center bg-[url('../assets//images/HomeSceen.png')] no-repeat bg-cover bg-center bg-lightPurple">
			<Helmet>
				<title>Strimiera | Home</title>
			</Helmet>
			<div className="flex flex-col items-center justify-center gap-3 w-11/12 md:w-3/12 text-white font-semibold">
				<Image
					src={Logo}
					alt="Strimiera logo"
					className="z-10 bg-contain w-4/12 select-none"
				/>
				<Text text="Enjoy the newest movies" />
				<br />
				<Link to={ROUTES.login} className="button w-10/12 max-w-72">
					Login{" "}
				</Link>
				<div className="flex flex-row gap-2">
					<Text text="No account? " />
					<Link
						to={ROUTES.register}
						className="underline underline-offset-4 hover:text-black transition-all duration-300 "
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};
