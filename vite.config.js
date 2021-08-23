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
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
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
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: [{
            find: '@',
            replacement: path.resolve('src')
        }]
    }
})