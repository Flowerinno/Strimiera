/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	readonly VITE_APP_SERVER_URL: string;
	readonly VITE_APP_POSTER_PATH: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
