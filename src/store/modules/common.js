/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-10-21 23:35:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-10-21 23:36:21
 */
const modules = {
    state: {
        menu: {
            top: [{
                label: "DEALS1",
                num: "42"
            }, {
                label: "DEALS1",
                num: "42"
            }, {
                label: "DEALS1",
                num: "42"
            }, {
                label: "DEALS1",
                num: "42"
            }, {
                label: "DEALS1",
                num: "42"
            }],
            setmenu: [{
                label: "Settings",
            }, {
                label: "My Team",
            }, {
                label: "Log out",
            }],
            linkmenu1: [{
                label: "Exhibitors",
                icon: "el-icon-burger",
            }, {
                label: "Sales",
                icon: "el-icon-box"
            }, {
                label: "Program",
                icon: "el-icon-edit"
            }, {
                label: "Delegates",
                icon: "el-icon-collection"
            }, {
                label: "Settings",
                icon: "el-icon-collection"
            }],
            linkmenu2: [{
                label: "Deals",
            }, {
                label: "Activities",
            }, {
                label: "Statistics",
            }],
        }
    },
    mutations: {
        login(state, provider) {
            state.hasLogin = true;
            state.loginProvider = provider;
        },
    },
    actions: {

    }
}
export default modules;