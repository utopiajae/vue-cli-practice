export default {
    namespaced: true,
    state: {
        email: ''
    },
    mutations: {
        SET_EMAIL(state, payload) {
          state.email = payload.email || '';
        }
    },
    actions: {
      setEmail({commit}, param) {
        commit({type: 'SET_EMAIL', email: param});
      }
    }
}