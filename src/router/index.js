/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 22:15:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-08-21 22:15:44
 */
import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../view/home.vue"
const _import = (path) => {
    return import ('../view/' + path + '.vue')
}
const routes = [{
    path: '/',
    name: 'index',
    component: _import('home')
}, {
    path: '/home',
    name: 'home',
    component: _import('home')
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;