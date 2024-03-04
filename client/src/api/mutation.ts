// import { gql } from "@apollo/client";
import { graphql } from "../__generated__";

export const CREATE_USER_MUTATION = graphql(`
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

export const LOGIN_USER_MUTATION = graphql(`
	mutation login($email: String!, $password: String!) {
		login(loginUserInput: { email: $email, password: $password }) {
			id
			name
			email
			message
			token
		}
	}
`);

export const ADD_TO_FAVOURITE_MUTATION = graphql(`
	mutation addFavourite($movieId: Int!, $userId: Int!) {
		addFavourite(addToFavourite: { movieId: $movieId, userId: $userId }) {
			message
		}
	}
`);
