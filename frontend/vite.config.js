import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/full-stack-photo-tagging-game/",
  plugins: [react()],
});
