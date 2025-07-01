// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  const buildTarget = process.env.VITE_APP_BUILD_TARGET; // 'main' or 'admin'

  // Base configuration applicable to both dev and build
  const commonConfig = {
    // Crucial: Set 'src' as the root directory for Vite.
    // All relative imports in your JS/JSX files will be resolved from here.
    root: resolve(__dirname, 'src'),
    
    // 'public' directory is at the project root, so it's '../public' relative to 'src'
    publicDir: '../public', 

    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
    ],
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

  // Development server configuration (`npm run dev`)
  if (command === 'serve') {
    return {
      ...commonConfig,
      build: {
        rollupOptions: {
          // For development, the entry point is the main HTML file within 'src'
          input: resolve(__dirname, 'src', 'index.html'), 
        },
      },
    };
  }

  // Production build configurations (`npm run build` or `npm run build-admin`)
  if (buildTarget === 'main') {
    console.log("Vite: Building main application (production mode)...");
    return {
      ...commonConfig,
      build: {
        // Output directory is relative to the project root, so '../dist-main' from 'src'
        outDir: '../dist-main', 
        emptyOutDir: true,
        rollupOptions: {
          // The input for the main production build is the HTML file in 'src'.
          // Vite will automatically find and inject the bundled JS.
          input: resolve(__dirname, 'src', 'index.html'), 
        },
      },
    };
  } else if (buildTarget === 'admin') {
    console.log("Vite: Building admin application (production mode)...");
    return {
      ...commonConfig,
      build: {
        // Output directory is relative to the project root, so '../dist-admin' from 'src'
        outDir: '../dist-admin', 
        emptyOutDir: true,
        rollupOptions: {
          // The input for the admin production build is the HTML file in 'src'.
          input: resolve(__dirname, 'src', 'admin.html'), 
        },
      },
    };
  }

  // Fallback for unexpected build targets (should not happen with `cross-env`)
  return {};
});
