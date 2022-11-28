// vite.config.ts
import { defineConfig } from "file:///D:/vue3.0/dance-project/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/vue3.0/dance-project/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/vue3.0/dance-project/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/vue3.0/dance-project/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/vue3.0/dance-project/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\vue3.0\\dance-project";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    },
    extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"]
  },
  server: {
    proxy: {
      "/app-dev": {
        target: "http://sph-h5-api.atguigu.cn/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/app-dev/, "")
      },
      "/api": {
        target: "http://sph-h5-api.atguigu.cn/",
        changeOrigin: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2dWUzLjBcXFxcZGFuY2UtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcdnVlMy4wXFxcXGRhbmNlLXByb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Z1ZTMuMC9kYW5jZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCdcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIC8qIGVsZW1lbnQtUGx1c1x1NjMwOVx1OTcwMFx1NUYxNVx1NTE2NSAqL1xyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICAvKiBcdTkxNERcdTdGNkVAICovXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcbiAgICB9LFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLnRzXCIsIFwiLnZ1ZVwiLCBcIi5qc1wiLCBcIi5qc3hcIiwgXCIudHN4XCJdLCAvLyBcdTVCRkNcdTUxNjVcdTY1RjZcdTYwRjNcdTg5ODFcdTc3MDFcdTc1NjVcdTc2ODRcdTYyNjlcdTVDNTVcdTU0MERcdTUyMTdcdTg4NjhcdTMwMDJcclxuICB9LFxyXG4gIC8qIFx1OTE0RFx1N0Y2RVx1NEVFM1x1NzQwNiAqL1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcHJveHk6IHtcclxuICAgICAgJy9hcHAtZGV2JyA6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vc3BoLWg1LWFwaS5hdGd1aWd1LmNuLycsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcHAtZGV2LywgJycpXHJcbiAgICAgIH0sXHJcbiAgICAgICcvYXBpJyA6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vc3BoLWg1LWFwaS5hdGd1aWd1LmNuLycsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UCxTQUFTLG9CQUFvQjtBQUMxUixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUSxlQUFjO0FBTHRCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUVKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQy9CO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxRQUFRLE9BQU8sUUFBUSxNQUFNO0FBQUEsRUFDbkQ7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQWE7QUFBQSxRQUNYLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxjQUFjLEVBQUU7QUFBQSxNQUNsRDtBQUFBLE1BQ0EsUUFBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
