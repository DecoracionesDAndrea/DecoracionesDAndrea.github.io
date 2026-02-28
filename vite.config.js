import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/', // Si es tu repo principal de usuario, usa '/'. 
  // Si es un repo de proyecto, usa '/NombreDelRepo/'
  build: {
    outDir: 'dist', // Aquí se generará la carpeta que subirás
  }
})
