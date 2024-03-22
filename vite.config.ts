/// <reference types="vitest" />
import * as path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import styleX from 'vite-plugin-stylex'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), styleX()],
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
})
