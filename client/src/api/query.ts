import { graphql } from "../__generated__";

export const GET_USER_QUERY = graphql(`
	mutation createUser($email: String!, $name: String!, $password: String) {
		createUser(
			createUserInput: { email: $email, name: $name, password: $password }
		) {
			id
			name
			email
			message
			token
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
