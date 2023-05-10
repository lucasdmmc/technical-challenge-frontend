import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@products': path.resolve(__dirname, './src/pages/products/components'),
      '@categories': path.resolve(__dirname, './src/pages/categories/components'),

    }
  },
  plugins: [react()],
})
