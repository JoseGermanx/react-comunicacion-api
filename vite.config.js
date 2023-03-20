import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  //propiedad nueva agregada para definir la ruta en la que carga la app
  base: '/app',
  server: {
    port: 4000,
  },
   build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    cache: true,
    minify: true,
    mode: "production",
    chunks: true,
    moduleBundling: true,
    prerenderPaths: ["/"],
    modulePreload: true,
    outDir: "build",
    devCode: true,
    debug: true,
  },})
