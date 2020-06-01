import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    password: ''
  },
  mutations: {
    SET_EMAIL(state, param) {
      state.email = param || '';
    },
    SET_PASSWORD(state, param) {
      state.password = param || '';
    }
  },
  actions: {
    setEmail({commit}, param) {
      commit('SET_EMAIL', param);
    },
    setPassWord({commit}, param) {
      commit('SET_PASSWORD', param);
    }
  },
  modules: {
  }
})
