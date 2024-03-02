import { Preview, Recommendations, Trending } from ".";
import { useQuery } from "@apollo/client";
import { INIT_QUERY } from "../../../api";
import { VideoSkeleton } from "../../skeleton";
import { TOAST } from "../../../common";
import { NotFound } from "../../../pages";
import { Movie } from "../../types";
import { Header } from "../../layout";

export const Main = () => {
	const { data, error, loading } = useQuery(INIT_QUERY, {
		fetchPolicy: "cache-and-network",
	});

	if (error) {
		TOAST.error("Failed to view movies. Please try again later.");
		throw NotFound();
	}

	const randomNum = Math.floor(Math.random() * 20);
	const arr = data?.init?.trending || [];
	const preview = { ...arr[randomNum] };

	return (
		<main className="relative z-10 flex-1 transition-all duration-200 ease-out min-h-screen">
			{loading || !arr?.length || !preview?.id ? (
				<VideoSkeleton />
			) : (
				<>
					<Header />
					<Preview {...(preview as Partial<Movie>)} />
					<Trending />
					<Recommendations />
				</>
			)}
		</main>
	);
};