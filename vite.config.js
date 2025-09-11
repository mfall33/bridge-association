import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import ViteRestart from 'vite-plugin-restart';
import copy from 'rollup-plugin-copy';
import tailwindcss from "@tailwindcss/vite";

export default {
    base: '/dist/',
    publicDir: 'src/public',
    build: {
        outDir: 'web/dist/',
        emptyOutDir: true,
        sourcemap: true,
        minify: 'esbuild',
        rollupOptions: {
            input: {
                main: './src/index.js',
            },
            output: {
                     dir: 'web/dist/',
                entryFileNames: `entry.js`,  // No hash for JS entry files
                chunkFileNames: `chunkFileNames.js`,  // No hash for JS chunks
                assetFileNames: `[name].[ext]`
            }
        },
        watch: {
            include: 'src/**, templates/**'
        },
    },
    // Remove the server block as you don't need a dev server
    plugins: [
        tailwindcss(),
        ViteRestart({
            reload: [
                'templates/**/*'
            ]
        }),
        copy({
            targets: [
                { 
                    src: 'src/public/**/*', 
                    dest: 'web/dist'
                }
            ]
        }),
        ViteImageOptimizer({})
    ]
};