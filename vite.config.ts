import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true, // بعد از build خودش گزارش رو باز می‌کنه
      filename: "bundle-stats.html", // مسیر ذخیره گزارش
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
