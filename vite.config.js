import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-responsive-carousel',
        // 'react-responsive-carousel/lib/styles/carousel.min.css', // Remove the .css extension
      ],
    },
  },
});
