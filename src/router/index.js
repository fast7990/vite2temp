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
    component: () => { return _import('home') }
}, {
    path: '/home',
    name: 'home',
    component: () => { return _import('home') }
}, {
    path: '/timeline',
    name: 'timeline',
    component: () => { return _import('timeline') }
}, {
    path: '/login',
    name: 'login',
    component: () => { return _import('login') }
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;