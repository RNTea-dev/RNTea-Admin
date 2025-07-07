import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  // The third parameter '' means to load all env vars, not just those prefixed with VITE_
  // For security, we will only expose VITE_ prefixed ones to the client via 'define'.
  const env = loadEnv(mode, process.cwd(), '');

  // Log all loaded environment variables (for debugging purposes)
  console.log('Vite Config: Loaded Environment Variables (from .env):', env);

  // Filter out only the VITE_ prefixed variables to expose to the client
  const clientEnv = Object.keys(env).reduce((acc, key) => {
    if (key.startsWith('VITE_')) {
      acc[`import.meta.env.${key}`] = JSON.stringify(env[key]);
    }
    return acc;
  }, {});

  // Log the variables that will be exposed to import.meta.env
  console.log('Vite Config: Client-side Environment Variables (import.meta.env):', clientEnv);

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
    // IMPORTANT: Add the resolve configuration directly here
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    // Define global constants replacement. This is how Vite makes env variables available
    // via import.meta.env on the client side.
    define: {
      ...clientEnv,
      // Ensure __app_id and __firebase_config are passed through if available from Canvas
      // This allows the app to work in both local Vite and Canvas environments.
      // We check for typeof __app_id !== 'undefined' to prevent reference errors
      // when running locally outside of the Canvas environment.
      '__app_id': typeof __app_id !== 'undefined' ? JSON.stringify(__app_id) : 'undefined',
      '__firebase_config': typeof __firebase_config !== 'undefined' ? JSON.stringify(__firebase_config) : 'undefined',
    },
  };

  // Development server configuration (`npm run dev`)
  if (command === 'serve') {
    return {
      ...commonConfig,
      server: {
        open: true, // Automatically open the browser
        port: 3000, // You can change this port if 3000 is occupied
      },
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
