import React from "react";
import { createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./styles/tailwind.css";
import { NotFoundRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root.ts";
import ErrorBoundary from "./error/ErrorBoundary.tsx";
import { NotFound } from "./pages/index.ts";

export const notFoundRoute = new NotFoundRoute({
	getParentRoute: () => rootRoute,
	component: NotFound,
});

const router = createRouter({ routeTree, notFoundRoute });

const client = new ApolloClient({
	uri: import.meta.env.VITE_APP_SERVER_URL + "/graphql",
	cache: new InMemoryCache(),
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<ApolloProvider client={client}>
				<ErrorBoundary>
					<App router={router} />
				</ErrorBoundary>
			</ApolloProvider>
		</React.StrictMode>
	);
}
