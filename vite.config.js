import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy({
    targets: ['defaults', 'not IE 11', 'Chrome 63']
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/style/main.scss";'
        }
      }
    },
  },
  server: {
    port: 9090,
    host: '0.0.0.0',
    open: true
  },

  build: {
    target: "es2015"
  }
})
