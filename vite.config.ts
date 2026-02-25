/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api/binance': {
        target: 'https://api.binance.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/binance/, '/api/v3'),
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // React core — cached long-term, rarely changes
            if (id.includes('react-dom')) return 'react-vendor';
            if (id.includes('/react/')) return 'react-vendor';
            // Router — small, separate cache lifecycle
            if (id.includes('react-router')) return 'router';
            // framer-motion — large, only loaded by pages that animate
            if (id.includes('framer-motion')) return 'animation';
            // lucide-react — tree-shaken icons
            if (id.includes('lucide-react')) return 'icons';
            // DOMPurify — only used by specific components
            if (id.includes('dompurify')) return 'vendor';
            // All other node_modules
            return 'vendor';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : '';
          if (facadeModuleId?.includes('Page')) {
            return 'pages/[name].[hash].js';
          }
          return 'assets/[name].[hash].js';
        }
      }
    },
    sourcemap: false,
    // esbuild is faster than terser with comparable output size
    minify: 'esbuild',
    // Target modern browsers for smaller output (no legacy polyfills)
    target: 'es2020',
    // Inline small assets to reduce HTTP requests
    assetsInlineLimit: 4096,
    // Warn on large chunks
    chunkSizeWarningLimit: 80,
  },
  // esbuild config for minification (replaces terserOptions)
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  define: {
    global: 'globalThis',
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
})
