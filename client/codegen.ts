import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:8000/graphql",
	documents: ["src/**/*.{ts,tsx}"],
	generates: {
		"src/__generated__/": {
			preset: "client",
			plugins: [],
		},
	},
	ignoreNoDocuments: true,
};

export default config;
