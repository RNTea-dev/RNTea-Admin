// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

const buildTarget = process.env.VITE_APP_BUILD_TARGET || 'main';

const isAdmin = buildTarget === 'admin';
const outDir = isAdmin ? 'dist-admin' : 'dist-main';
const inputHtml = isAdmin ? 'admin.html' : 'index.html';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, inputHtml),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
