import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const getPlugins = async () => {
  const plugins = [react(), runtimeErrorOverlay()];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return plugins;
};

export default defineConfig(async () => ({
  plugins: await getPlugins(),
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // vite.config.ts
build: {
  outDir: path.resolve(__dirname, "client/dist"), // ✅ Correct output
  emptyOutDir: true,
},

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
