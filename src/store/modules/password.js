export default {
    namespaced: true,
    state: {
        password: ''
    },
    mutations: {
        SET_PASSWORD(state, payload) {
            state.password = payload.newPW || '';
        }
    },
    actions: {
        setPassWord({ commit }, param) {
            commit({ type: 'SET_PASSWORD', newPW: param });
        }
    }
}