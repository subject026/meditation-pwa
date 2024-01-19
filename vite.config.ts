import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "HabitCache",
        short_name: "HabitCache",
        description: "Track your things and such",
        theme_color: "#38a9ff",
        display: "fullscreen",
        start_url: "/?fullscreen=true",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/mask-icon.png",
            sizes: "512x512",
            type: "image/svg",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    port: 7777,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
