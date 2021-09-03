/*
 * @Author: your name
 * @Date: 2021-08-02 09:37:23
 * @LastEditTime: 2021-08-11 12:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\main.js
 */
import {
    createApp
} from 'vue'
import ElementPlus from 'element-plus';
import {
    Router
} from '@/router/index';
import 'default-passive-events'
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/packages/theme-chalk/src/base.scss'
import App from './App.vue';
import '@/assets/global.scss'
const app = createApp(App)
app.use(ElementPlus).use(Router)
app.mount('#app')