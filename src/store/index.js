/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-09-19 10:17:44
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-10-21 23:38:03
 */
import { createStore } from 'vuex';
import user from "./modules/user"
import common from "./modules/common"
export default createStore({
    modules: { user, common },
})