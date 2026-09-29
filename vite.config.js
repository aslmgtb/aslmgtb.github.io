import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Repo is named aslamgtb.github.io, so the site lives at the root: base "/"
export default defineConfig({ plugins: [react()], base: "/" });
