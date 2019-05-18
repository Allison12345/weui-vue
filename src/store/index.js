import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const MSG_RESULT = 'MSG_RESULT'
export const SAVE_MSG_RESULT = 'SAVE_MSG_RESULT'

export default new Vuex.Store({
  state: {
    [MSG_RESULT]: {
      title: '',
      icon: '',
      desc: '',
      btnText: '',
      detail: ''
    }
  },
  getters: {
    [MSG_RESULT]: state => state[MSG_RESULT]
  },
  mutations: {
    [SAVE_MSG_RESULT](state, data) {
      state[MSG_RESULT] = data
    }
  }
})
