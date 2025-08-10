import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    rollupOptions: {
      input: resolve(__dirname, "src/index.html"),
    },
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  esbuild: {
    target: "es2020",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/scripts": resolve(__dirname, "src/scripts"),
      "@/styles": resolve(__dirname, "src/styles"),
      "@/types": resolve(__dirname, "src/types"),
    },
  },
});
