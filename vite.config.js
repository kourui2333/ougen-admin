/*
 * @Author: your name
 * @Date: 2021-08-02 09:37:23
 * @LastEditTime: 2021-08-18 10:23:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\vite.config.js
 */
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
const {
  resolve
} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // logLevel: "error",
  resolve: {
    alias: {
      "@": resolve("./src")
    }
  },
  plugins: [vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
  server: {
    host: "0.0.0.0",
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        // 分包
        manualChunks(id) {
          // console.log(id.slice(id.indexOf('node_modules') / 1 + 13 / 1, id.indexOf('node_modules') / 1 + 18 / 1));
          if (id.includes('node_modules') && id.includes('prime')) {
            // console.log('prime');
            return 'prime'
          } else if (id.includes('node_modules') && id.includes('vue')) {
            // console.log("vue");
            return 'vue'
          } else if (id.includes('node_modules') && id.includes('element')) {
            // console.log("node_modules");
            return 'element'
          } else if (id.includes('node_modules') && id.includes('echarts')) {
            // console.log("node_modules");
            return 'echarts'
          } else if (id.includes('node_modules')) {
            // console.log("node_modules");
            return 'vendor'
          }
        }
      }
    }
  }
})