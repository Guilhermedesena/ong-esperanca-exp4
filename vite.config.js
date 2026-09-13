import { cp, mkdir } from "node:fs/promises";
import { defineConfig } from "vite";

function copyRuntimeViews() {
  return {
    name: "copy-runtime-views",
    async closeBundle() {
      await mkdir("dist", { recursive: true });
      await Promise.all([
        cp("html", "dist/html", { recursive: true }),
        cp("imagens", "dist/imagens", { recursive: true })
      ]);
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [copyRuntimeViews()],
  build: {
    target: "es2020",
    cssMinify: true,
    sourcemap: true
  }
});
