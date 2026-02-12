import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://example.github.io";

export default defineConfig({
  site,
  base: "/Anniversary",
  output: "static",
  outDir: "./docs",
});
