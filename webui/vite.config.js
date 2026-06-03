import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
    return {
        base: './',
        build: {
            outDir: '../module/webroot',
            rollupOptions: {
                external: ['webuix']
            }
        },
        resolve: {
            alias: command === 'serve' ? {
                webuix: '/src/webuix-dummy.js'
            } : {}
        },
        optimizeDeps: {
            exclude: ['webuix']
        }
    };
});
