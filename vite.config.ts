import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: 'Quanta Unduck',
        short_name: 'Unduck',
        description: 'Quanta Unduck',
        theme_color: '#000000',
        icons: []
      }
    }),
  ],
});
