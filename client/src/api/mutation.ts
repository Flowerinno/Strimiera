import { gql } from "../__generated__";

export const CREATE_USER_MUTATION = gql(`
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
