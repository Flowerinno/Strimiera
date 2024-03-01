import { gql } from "@apollo/client";

export const getUserQuery = gql`
	query getUserQuery($id: Int!) {
		user(id: $id) {
			id
			name
			email
		}
	}
`;
