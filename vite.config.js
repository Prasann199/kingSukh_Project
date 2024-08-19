import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/KingSukh_GuestHouse_Project/",
  build: {
    outDir: 'dist', // Ensure the output directory is correct
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure the entry point is correct
      },
    },
  },

})
