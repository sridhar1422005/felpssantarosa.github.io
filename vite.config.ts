import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  base: "./", // For GitHub Pages deployment with custom domain
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: "src/index.html",
    },
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  // TypeScript support
  esbuild: {
    target: "es2020",
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/scripts": resolve(__dirname, "src/scripts"),
      "@/styles": resolve(__dirname, "src/styles"),
      "@/types": resolve(__dirname, "src/types"),
    },
  },
});
