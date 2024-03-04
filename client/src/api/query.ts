import { graphql } from "../__generated__";

export const GET_USER_QUERY = graphql(`
	query getUser($id: Int!) {
		user(id: $id) {
			id
			name
			email
		}
	}
`);

export const INIT_QUERY = graphql(`
	query init {
		init {
			trending {
				id
				title
				overview
				poster_path
				release_date
				vote_average
				popularity
				original_language
			}
		}
	}
`);

export const GET_FAVOURITES_QUERY = graphql(`
	query getFavourites($userId: Int!) {
		getFavourites(userId: $userId) {
			id
			title
			poster_path
			release_date
		}
	}
`);
