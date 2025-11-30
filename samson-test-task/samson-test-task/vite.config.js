import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        text: resolve(__dirname, 'text/index.html'),
        form: resolve(__dirname, 'form/index.html'),
        justButtons: resolve(__dirname, 'justButtons/index.html'),
        scheme: resolve(__dirname, 'scheme/index.html'),
        slider: resolve(__dirname, 'slider/index.html'),
        blackPage: resolve(__dirname, 'blackPage/index.html'),
      },
    },
  },
});
