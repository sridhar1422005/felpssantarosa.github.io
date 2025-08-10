import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

// Custom plugin to move index.html to root of dist (no path changes needed now)
const moveIndexPlugin = () => ({
  name: "move-index",
  closeBundle() {
    try {
      // With root: "src", the HTML is already built to ../dist/index.html
      // No need to move or modify paths
      console.log(
        "Build completed - index.html is already in the correct location"
      );
    } catch (e) {
      console.warn(
        "Build plugin error:",
        e instanceof Error ? e.message : String(e)
      );
    }
  },
});

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    moveIndexPlugin(),
  ],
  base: "./", // For GitHub Pages deployment with custom domain
  root: "src", // Set src as the root directory for development
  publicDir: "../public", // Point to public directory from src
  build: {
    outDir: "../dist", // Output to dist in the project root
    assetsDir: "assets",
    rollupOptions: {
      input: resolve(__dirname, "src/index.html"), // Absolute path to index.html
    },
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true, // Open at root URL
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
