/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 22:15:17
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-08-21 22:15:44
 */
import { createRouter, createWebHashHistory } from "vue-router"
const _import = (path) => {
    return import ('../view/' + path + '.vue')
}
const routes = [{
    path: '/',
    name: 'index',
    component: _import('timeline')
}, {
    path: '/home',
    name: 'home',
    component: _import('home')
}, {
    path: '/timeline2',
    name: 'timeline2',
    component: _import('timeline2')
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;