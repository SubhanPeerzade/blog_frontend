import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.split('node_modules/')[1].split('/');
            const pkgName = parts[0].startsWith('@') ? parts.slice(0, 2).join('/') : parts[0];
            if ([
              'react',
              'react-dom',
              'react-router-dom',
              '@mui/material',
              '@mui/icons-material',
              '@emotion/react',
              '@emotion/styled',
              '@reduxjs/toolkit',
              'react-redux',
              'axios'
            ].includes(pkgName)) {
              return `vendor-${pkgName.replace('@', '').replace('/', '-')}`;
            }
            return 'vendor-other';
          }
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
    historyApiFallback: true, // 👈 this tells Vite to serve index.html for unknown routes
  },
})
