import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define la configuración de Vite y usa el plugin de React
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Redirige las solicitudes a /api al servidor de Express
    },
  },
});