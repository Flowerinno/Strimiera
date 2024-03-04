import { ADD_TO_FAVOURITE_MUTATION } from "../api";
import { useMutation } from "@apollo/client";
import localforage from "localforage";

import { TOAST } from "../common";

export const useAddToFavourite = () => {
	const [addToFavourite, { data, loading, error }] = useMutation(
		ADD_TO_FAVOURITE_MUTATION
	);

	const handleAdd = async (movieId: number, userId: number) => {
		try {
			const prev = ((await localforage.getItem("favourite")) as {
				movies: number[];
			}) || { movies: [] };

			if (!prev?.movies.includes(movieId)) {
				localforage.setItem("favourite", {
					movies: [movieId, ...prev.movies],
				});
			} else {
				localforage.setItem("favourite", {
					movies: prev.movies.filter((id) => id !== movieId),
				});
			}

			addToFavourite({
				variables: {
					movieId,
					userId,
				},
			});
		} catch (error) {
			TOAST.error("Failed to add to favourite");
		}
	};

	return {
		handleAdd,
		data,
		loading,
		error,
	};
};
