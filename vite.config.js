import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

  plugins: [react()],
  //nueva propiedad incluida por Jose German para el trabajo - sirve para definir una ruta de trabajo de la app
  base: '/app',
  server: {
    port: 4000,
  },
  preview: {
    port: 4270,
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
    devCode: true,
    debug: true,
  },
});