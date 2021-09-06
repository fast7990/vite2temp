/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-08-21 21:58:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-08-21 22:31:55
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), styleImport({
        libs: [{
            libraryName: "element-plus",
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
                return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
                return `element-plus/lib/${name}`;
            },
        }, ],
    }), ],
    server: {
        port: 8081,
        // proxy: {
        //     '/api': {
        //         target: '',
        //         changeOrigin: true
        //     }
        // },
        // https:true,//开启http2
        open: true
    },
    base: './', // 设置打包路径
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
                additionalData: '@import "./src/assets/global.scss";',
            },
        },
    },
    build: {
        target: 'es2015',
        // terserOptions: {
        //     compress: {
        //         drop_console: true  // 生产环境移除console
        //     }
        // },
        outDir: 'dist', //指定输出路径
        assetsDir: "assets", //指定生成静态资源的存放路径
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: [{
            find: '@',
            replacement: path.resolve('src')
        }]
    }
})