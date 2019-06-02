import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const MSG_RESULT = 'MSG_RESULT'
export const SAVE_MSG_RESULT = 'SAVE_MSG_RESULT'
export const NAV_INDEX = 'NAV_INDEX'
export const SAVE_NAV_INDEX = 'SAVE_NAV_INDEX'
export const TABBAR_INDEX = 'TABBAR_INDEX'
export const SAVE_TABBAR_INDEX = 'SAVE_TABBAR_INDEX'
export default new Vuex.Store({
  state: {
    [MSG_RESULT]: {
      title: '',
      icon: '',
      desc: '',
      btnText: '',
      detail: ''
    },
    [NAV_INDEX]: 0,
    [TABBAR_INDEX]: 0
  },
  getters: {
    [MSG_RESULT]: state => state[MSG_RESULT],
    [NAV_INDEX]: state => state[NAV_INDEX],
    [TABBAR_INDEX]: state => state[TABBAR_INDEX]
  },
  mutations: {
    [SAVE_MSG_RESULT](state, data) {
      state[MSG_RESULT] = data
    },
    [SAVE_NAV_INDEX](state, index) {
      state[NAV_INDEX] = index
    },
    [SAVE_TABBAR_INDEX](state, index) {
      state[TABBAR_INDEX] = index
    }
  }
})
