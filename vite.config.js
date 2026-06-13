import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegura que las rutas sean correctas en producción
  build: {
    outDir: 'dist' // Asegura que la salida del build esté en la carpeta dist
  }
})
