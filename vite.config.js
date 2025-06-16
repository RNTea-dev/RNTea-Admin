// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public', // Explicitly define the public directory for static assets
  build: {
    outDir: 'dist', // Output to 'dist' folder in the project root
    emptyOutDir: true, // Empty the output directory on build
  },
  plugins: [
    react({
      jsxRuntime: 'automatic', // This is the primary way to enable JSX transformation
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // This correctly tells esbuild to treat .js files as JSX during dependency optimization
      },
    },
  },
  esbuild: {
    jsx: 'automatic', // Ensure esbuild itself processes JSX
  }
});
