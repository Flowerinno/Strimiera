import { Movie } from "../../types";
import { MediaPreview } from "../../ui/MediaPreview";

interface TrendingProps {
	trending: Movie[];
}

export const Trending = ({ trending }: TrendingProps) => {
	return (
		<div className="flex flex-row flex-wrap justify-around gap-3 p-6 bg-[#21201E]">
			{trending?.map((movie) => {
				if (!movie.poster_path || !movie.title || !movie.release_date)
					return null;
				return (
					<MediaPreview
						key={movie.id}
						id={String(movie.id)}
						title={movie.title}
						date={movie.release_date}
						poster_path={movie.poster_path}
					/>
				);
			})}
		</div>
	);
};
