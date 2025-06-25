import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({

  server: {
    host: '0.0.0.0', // Cho phép lắng nghe trên tất cả giao diện
    port: 5173,
    allowedHosts: ['conkin.vn', 'www.conkin.vn', '171.244.61.141']
  },
  plugins: [react()
    , tailwindcss()],

})
