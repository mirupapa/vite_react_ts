import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  root: './src',
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  build: {
    outDir: '../public',
  },
})
