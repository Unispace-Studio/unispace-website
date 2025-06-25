import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    allowedHosts: ['815a-103-171-165-204.ngrok-free.app'],
    host: true, // Penting biar bisa diakses dari luar localhost
  },
})


