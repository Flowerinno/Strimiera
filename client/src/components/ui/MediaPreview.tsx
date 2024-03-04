import { Link } from "@tanstack/react-router";

import { useAddToFavourite } from "../../hooks";
import { useUserStore } from "../../store";
import { Favourite } from "./Favourite";

interface MediaPreviewProps {
	id?: number | null;
	poster_path?: string | null;
	title?: string | null;
	date: string;
}

export const MediaPreview = ({
	id,
	poster_path,
	title,
	date,
}: MediaPreviewProps) => {
	const userId = useUserStore((state) => state.id);
	const { handleAdd } = useAddToFavourite();

	if (!id || !poster_path || !title) return null;

	return (
		<div
			id={String(id)}
			className="relative w-40 h-40 z-5 rounded-lg border-2 border-[#969696]"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
				backgroundSize: "contain",
				width: "250px",
				height: "370px",
				backgroundPosition: "left",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Favourite
				handleAdd={handleAdd}
				movieId={id}
				userId={userId}
				className="absolute top-2 right-2 h-8 contain cursor-pointer hover:scale-105 transition-all duration-200 ease-out z-25"
			/>
			<Link
				to={"/watch/" + id}
				className="text-black bg-white absolute bottom-0 w-full p-3 opacity-60 hover:bg-purple hover:text-white transition-all duration-200"
			>
				<h1 className="font-bold text-lg">{title}</h1>
				<p className="font-bold text-sm">{date} | EN</p>
			</Link>
		</div>
	);
};
