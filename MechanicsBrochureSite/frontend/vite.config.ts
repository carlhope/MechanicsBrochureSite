import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: '../App_Plugins/MyExtension/dist',
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: './src/my-dashboard.ts',
            output: {
                entryFileNames: 'my-dashboard.js',
                assetFileNames: 'my-dashboard.[ext]'
            }
        }
    }
});
