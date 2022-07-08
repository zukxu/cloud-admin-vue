import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/assets/styles/index.scss";`
            }
        }
    },
    server: {
        open: true,
        proxy: {
            '/api/v1/chart': {
                target: 'http://192.168.12.116:8887',
                changeOrigin: true
            },
            '/api/v1': {
                target: 'http://192.168.12.116:8888',
                changeOrigin: true,
                rewrite: (path) => path.replace('/^\/api/v1', '')
            }
        }
    }
})
