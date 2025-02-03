import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname), // Racine du projet
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    process.env.NODE_ENV === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public', // Dossier contenant index.html
  build: {
    outDir: 'dist', // Dossier de sortie pour le build
  },
});
