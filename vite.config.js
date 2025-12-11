import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      compressionOptions: { level: 11 }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240
    })
  ],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (name && name.endsWith('.css')) return 'assets/css/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    cssMinify: true,
    chunkSizeWarningLimit: 1000
  },
  css: {
    postcss: './postcss.config.cjs',
    devSourcemap: true
  },
  base: '/',
  define: {
    'process.env': {}
  }
})