/// <reference types="vitest" />
import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['setupTests.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    clearMocks: true,
  },
});
