import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Triggering cache refresh
export default defineConfig({
  plugins: [
    react(),
  ],
})
