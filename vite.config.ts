import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or '@vitejs/plugin-react' depending on what your file already has

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})
