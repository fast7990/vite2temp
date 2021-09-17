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
    redirect: "/home",
    component: () => _import('home')
}, {
    path: '/home',
    name: 'home',
    meta: {
        title: '首页',
        keepAlive: true
    },
    component: () => _import('home')
}, {
    path: '/timeline',
    name: 'timeline',
    meta: {
        title: '时间线',
    },
    component: () => _import('timeline')
}, {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录',
    },
    component: () => _import('login')
}, {
    path: '/temp',
    name: 'temp',
    component: () => _import('temp/index'),
    redirect: "/temp/test",
    meta: {
        title: '测试',
    },
    children: [{
        path: '/temp/test',
        name: 'test',
        meta: {
            title: 'test1',
        },
        component: () => _import('temp/test'),
    }, {
        path: '/temp/test2',
        name: 'test2',
        meta: {
            title: 'test2',
        },
        component: () => _import('temp/test2'),
    }]
}]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})
export default router;