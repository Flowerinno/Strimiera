import { Movie } from "../../types";
import { Image } from "../../ui";
import FAV from "../../../assets/images/FAV.png";
import { Button } from "../../forms";

export const Preview = ({
	title,
	poster_path,
	id,
	release_date,
	vote_average,
	original_language,
}: Movie) => {
	return (
		<div
			id={`${id}`}
			className="min-h-56 h-56 w-full flex flex-col justify-end"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
				backgroundSize: "cover",
				width: "100%",
				height: "400px",
				backgroundPosition: "right",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="flex flex-col items-start gap-5 p-5 md:p-8">
				<div className="flex-1 flex flex-col">
					<div className="flex flex-row justify-between items-center z-25">
						<div className="flex flex-col gap-2 text-white backdrop-blur-sm rounded-md">
							<h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
							<p className="text-lg md:text-2xl font-semibold">
								R: {Math.round(vote_average ?? 5).toFixed(1)} |{" "}
								{original_language?.toUpperCase()} | {release_date}
							</p>
						</div>
					</div>
				</div>
				<div
					id="preview_button"
					className="flex flex-row gap-5 items-center justify-start"
				>
					<Button
						text="Watch Now"
						className="button min-w-44 w-64 h-16 self-end"
					/>
					<Image
						src={FAV}
						alt="Add to favourite"
						className="h-16 contain cursor-pointer hover:scale-105 transition-all duration-200 ease-out"
					/>
				</div>
			</div>
		</div>
	);
};
