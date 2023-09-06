import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  plugins: [react({ babel: { parserOpts: { plugins: ['decorators-legacy'] } } })],
  server: {
    host: true,
    port: 5173, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 5173,
  },
});
