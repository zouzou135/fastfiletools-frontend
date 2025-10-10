// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // KEEP THIS: It ensures the React plugin handles JSX in all these file types
      include: "**/*.{js,jsx,ts,tsx}",
    }),
  ],
  build: {
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "pdf-vendor": ["pdfjs-dist"],
          "mantine-core": ["@mantine/core"],
          "mantine-hooks": ["@mantine/hooks"],
          "mantine-notifications": ["@mantine/notifications"],
        },
      },
    },
    // Remove console.logs in production
    minify: "esbuild",
    sourcemap: true,
  },
  // Configure proxy to forward API requests to your Laravel backend
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000", // ⚠️ Update this to your Laravel app URL if different
        changeOrigin: true,
        secure: false, // Set to true if Laravel is using HTTPS
      },
    },
  },
  // If you are using absolute path imports (e.g., import Component from '@/components/...')
  // resolve: {
  //   alias: [{ find: '@', replacement: '/src' }],
  // },
});
