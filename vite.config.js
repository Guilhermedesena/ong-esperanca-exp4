import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { minify } from "html-minifier-terser";
import { defineConfig } from "vite";

const htmlMinifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true
};

function copyRuntimeViews() {
  return {
    name: "copy-runtime-views",
    async transformIndexHtml(html) {
      return minify(html, htmlMinifyOptions);
    },
    async closeBundle() {
      await mkdir("dist", { recursive: true });
      await Promise.all([
        cp("html", "dist/html", { recursive: true }),
        cp("imagens", "dist/imagens", { recursive: true })
      ]);
      const viewsDirectory = "dist/html/views";
      const viewFiles = (await readdir(viewsDirectory)).filter((file) => file.endsWith(".html"));
      await Promise.all(viewFiles.map(async (file) => {
        const path = `${viewsDirectory}/${file}`;
        const source = await readFile(path, "utf8");
        await writeFile(path, await minify(source, htmlMinifyOptions));
      }));
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
