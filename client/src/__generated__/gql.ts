/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation createUser($email: String!, $name: String!, $password: String) {\n\t\tcreateUser(\n\t\t\tcreateUserInput: { email: $email, name: $name, password: $password }\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n": types.CreateUserDocument,
    "\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(loginUserInput: { email: $email, password: $password }) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n": types.LoginDocument,
    "\n\tquery init {\n\t\tinit {\n\t\t\ttrending {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\toverview\n\t\t\t\tposter_path\n\t\t\t\trelease_date\n\t\t\t\tvote_average\n\t\t\t\tpopularity\n\t\t\t\toriginal_language\n\t\t\t}\n\t\t}\n\t}\n": types.InitDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createUser($email: String!, $name: String!, $password: String) {\n\t\tcreateUser(\n\t\t\tcreateUserInput: { email: $email, name: $name, password: $password }\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createUser($email: String!, $name: String!, $password: String) {\n\t\tcreateUser(\n\t\t\tcreateUserInput: { email: $email, name: $name, password: $password }\n\t\t) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(loginUserInput: { email: $email, password: $password }) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(loginUserInput: { email: $email, password: $password }) {\n\t\t\tid\n\t\t\tname\n\t\t\temail\n\t\t\tmessage\n\t\t\ttoken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery init {\n\t\tinit {\n\t\t\ttrending {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\toverview\n\t\t\t\tposter_path\n\t\t\t\trelease_date\n\t\t\t\tvote_average\n\t\t\t\tpopularity\n\t\t\t\toriginal_language\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery init {\n\t\tinit {\n\t\t\ttrending {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\toverview\n\t\t\t\tposter_path\n\t\t\t\trelease_date\n\t\t\t\tvote_average\n\t\t\t\tpopularity\n\t\t\t\toriginal_language\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;