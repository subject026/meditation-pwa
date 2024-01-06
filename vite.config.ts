import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// import basicSsl from "@vitejs/plugin-basic-ssl";
// import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [
    react(),
    // mkcert(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "CalmCache",
        short_name: "CalmCache",
        description: "Track your meditation practice",
        theme_color: "#38a9ff",
        display: "standalone",
        start_url: "/",
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
    // https: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
