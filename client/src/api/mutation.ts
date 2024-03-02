import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
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
`;

export const LOGIN_USER_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(loginUserInput: { email: $email, password: $password }) {
			id
			name
			email
			message
			token
		}
	}
`;
