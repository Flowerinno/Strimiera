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

export const LOGIN_USER_MUTATION = gql(
	`\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(loginUserInput: { email: $email, password: $password }) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n`
);
