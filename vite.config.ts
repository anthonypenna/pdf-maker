import { defineConfig } from 'vite'
import windicss from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [windicss()],
  server: {
    port: 3000
  }
})
