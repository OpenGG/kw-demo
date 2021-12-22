import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      port: 443
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@ks/kw': path.resolve(__dirname, './k'),
      '@ks/kwcolor': path.resolve(__dirname, './k')
    }
  }
});
