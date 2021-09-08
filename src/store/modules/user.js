const modules = {
    state: {
        name: '111',
        hasLogin: false,
        loginProvider: ""
    },
    mutations: {
        login(state, provider) {
            state.hasLogin = true;
            state.loginProvider = provider;
        },
    },
    actions: {
        setLogin(content, payload) { //增加payload载荷
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('测试载荷---' + payload.id); //测试载荷输出
                    content.commit('login', 111)
                    resolve()
                }, 1000)
            })
        }
    }
}
export default modules;