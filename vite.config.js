import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",  // Mở cổng cho tất cả IP bên ngoài container
    port: 5173,
    strictPort: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './utils'),
    },
  },
})
