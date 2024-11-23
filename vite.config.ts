import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [
      react({
         babel: {
            plugins: [
               [
                  "babel-plugin-styled-components",
                  {
                     displayName: true,
                     fileName: true,
                     meaninglessFileNames: ["index", "styles"],
                     ssr: false
                  }
               ]
            ]
         }
      })
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
         '@components': path.resolve(__dirname, './src/components'),
         '@pages': path.resolve(__dirname, './src/pages'),
         '@styles': path.resolve(__dirname, './src/styles'),
         '@data': path.resolve(__dirname, './src/data'),
      },
   },
});