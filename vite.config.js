import react from '@vitejs/plugin-react';
import reactSvg from 'vite-plugin-react-svg';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    reactSvg()
  ],
  assetsInclude: ['**/*.PNG'],
});
