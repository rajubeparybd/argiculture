import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: process.env.VITE_BASE_URL || "/argiculture/",
  plugins: [react()],
});
