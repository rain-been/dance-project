import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    /* element-Plus按需引入 */
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  /* 配置@ */
  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
  },
  /* 配置代理 */
  server: {
    proxy: {
      '/app-dev' : {
        target: 'http://gmall-h5-api.atguigu.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app-dev/, '')
      }
    }
  },
  
})
