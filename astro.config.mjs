import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://example.github.io";

export default defineConfig(({ command }) => ({
  site,
  base: command === "dev" ? "/" : "/Anniversary",
  output: "static",
  outDir: "./docs",
}));
