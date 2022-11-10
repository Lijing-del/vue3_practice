import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
type ViteProps = {
  mode: string;
};
export default ({ mode }: ViteProps) => {
  // console.log(mode, 'mode')
  // console.log(loadEnv(mode, process.cwd()))
  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        // 路径别名
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/style/index.scss";`
        }
      }
    },
    server: {
      proxy: {
        "/api": {
          // vite提供的loadEnv可以确认环境变量
          // mode可以拿到当前环境变量 development/test/production
          // 直接读取到根目录下的配置文件 .env.dev/.env.prod/.env.test
          target: loadEnv(mode, process.cwd()).VITE_API_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  })
}
