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
import store from './store'
import utils from './utils'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App);

app.config.globalProperties.$utils = utils;

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');