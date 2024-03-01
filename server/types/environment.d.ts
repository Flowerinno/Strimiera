export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: string;
      DATABASE_URL: string;
      MOVIEDB_API_KEY: string;
      JWT_SECRET: string;
      COOKIE_SECRET: string;
    }
  }
}
