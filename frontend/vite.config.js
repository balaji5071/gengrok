import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel serves this folder
  },
  base: '/', // ensures correct routing on deployed site
})
