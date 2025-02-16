import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    host: true,
    port: process.env.PORT || 5173
  },
  preview: {
    port: process.env.PORT || 5173,
    host: true,
    allowedHosts: [
      'healthcheck.railway.app',
      'daily-quote-admin-production.up.railway.app'
    ]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})