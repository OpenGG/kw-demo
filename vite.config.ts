import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isCodeSandbox = process.cwd() === '/sandbox'

const server = isCodeSandbox && {
  hmr: {
    port: 443
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server,
  plugins: [react()],
  resolve: {
    alias: {
      '@ks/kw': path.resolve(__dirname, './k'),
      '@ks/kwcolor': path.resolve(__dirname, './k')
    }
  },
  build: {
    outDir: '/tmp/kw-demo'
  }
});
