/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add all your VITE_ variables here. The names MUST match your .env file.
  readonly VITE_BASE_URL: string;

  // Add any other VITE_ variables you use in your code:
  // readonly VITE_API_KEY: string;
  // readonly VITE_ANALYTICS_ID: string;

  // The VITE_ prefix is standard for Vite public environment variables
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
