import { Image } from "./Image";

import FAV from "../../assets/images/FAV.png";
import FAV_ADDED from "../../assets/images/FAV_ADDED.png";

import localforage from "localforage";
import { useEffect, useState } from "react";

interface FavouriteProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	handleAdd: (movieId: number, userId: number) => void;
	userId: number | null;
	movieId: string | number;
}

export const Favourite = ({
	handleAdd,
	userId,
	movieId,
	...rest
}: FavouriteProps) => {
	const [isAdded, setIsAdded] = useState(false);

	useEffect(() => {
		localforage.getItem("favourite").then((data) => {
			if (data) {
				setIsAdded(
					(data as { movies: number[] }).movies.includes(Number(movieId))
				);
			}
		});
	}, []);

	if (isAdded) {
		return (
			<Image
				src={FAV_ADDED}
				alt="Liked movied."
				{...rest}
				onClick={() => {
					handleAdd(Number(movieId), Number(userId));
					setIsAdded(false);
				}}
			/>
		);
	}

	return (
		<Image
			src={FAV}
			alt="Add to favourite"
			onClick={() => {
				handleAdd(Number(movieId), Number(userId));
				setIsAdded(true);
			}}
			{...rest}
		/>
	);
};
