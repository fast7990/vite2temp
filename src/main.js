/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 21:58:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-08-21 22:19:53
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');