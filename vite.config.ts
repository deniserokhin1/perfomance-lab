import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr(), react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        __API__: JSON.stringify(
            'https://performance-lab-server-6ejsn9516-deniserokhin1.vercel.app/'
        ),
        __IS_DEV__: JSON.stringify(true),
    },
    css: {
        modules: {
            generateScopedName: '[name]__[local]--[hash:base64:5]',
        },
    },
})
