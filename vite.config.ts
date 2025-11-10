/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
    }),
    svgr(),
  ],
  // Only use base path for production builds (GitHub Pages)
  base: mode === 'production' ? '/portfolio/' : '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
        'src/reportWebVitals.ts',
        'src/vite-env.d.ts',
        'src/types/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/test-utils.tsx',
        'build/',
        'public/',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
      ],
      include: ['src/**/*.{ts,tsx}'],
      all: true,
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 45,
        statements: 70,
      },
    },
  },
}));
