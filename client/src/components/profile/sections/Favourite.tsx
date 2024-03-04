import { useUserStore } from "../../../store";
import { useQuery } from "@apollo/client";
import { GET_FAVOURITES_QUERY } from "../../../api";
import { MediaPreview } from "../../ui/MediaPreview";
import { NotFound } from "../../../pages";

export const Favourite = () => {
	const userId = useUserStore((state) => state.id);

	if (!userId) return null;

	const { data, error, loading } = useQuery(GET_FAVOURITES_QUERY, {
		variables: { userId },
		fetchPolicy: "cache-and-network",
	});

	if (error) {
		return <NotFound />;
	}

	return (
		<div className="flex flex-row flex-wrap justify-around gap-3 p-10 bg-[#21201E]">
			{data?.getFavourites?.length &&
				data?.getFavourites?.map((movie) => {
					return (
						<MediaPreview
							key={movie?.id}
							date={movie?.release_date ?? new Date().getFullYear().toString()}
							{...movie}
						/>
					);
				})}
		</div>
	);
};
