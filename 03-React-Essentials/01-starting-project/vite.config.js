import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: split vendor code
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
