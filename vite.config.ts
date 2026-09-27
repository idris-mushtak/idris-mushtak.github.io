import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://idris-mushtak.github.io/ (a GitHub user site), so base is "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
