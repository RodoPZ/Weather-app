import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vitej  s.dev/config/

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react(), svgr()],
});
