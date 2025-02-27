/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/__tests__/setup.ts"],
    },
    base: "/fullstack-trainer/",

    build: {
      minify: mode === "development" ? false : true,
      sourcemap: mode === "development" ? "inline" : undefined,
    },
  };
});
