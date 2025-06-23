// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const isMainBuild = process.env.VITE_APP_BUILD_TARGET === 'main';

  return {
    publicDir: 'public',
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
    ],
    build: {
      outDir: isMainBuild ? 'dist-main' : 'dist-admin',
      emptyOutDir: true,

      rollupOptions: {
        // This is the CRITICAL line to ensure it points to 'src/admin.html'
        input: isMainBuild
          ? resolve(__dirname, 'index.html') // Path for main app
          : resolve(__dirname, 'src/admin.html'), // CORRECTED PATH: admin.html is inside 'src'
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    esbuild: {
      jsx: 'automatic',
    },
  };
});