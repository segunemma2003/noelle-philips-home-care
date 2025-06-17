import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Safely import lovable-tagger
let componentTagger;
try {
  const lovableTagger = await import("lovable-tagger");
  componentTagger = lovableTagger.componentTagger;
} catch (e) {
  // Fallback if lovable-tagger is not available
  componentTagger = () => null;
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
}));