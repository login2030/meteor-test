import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextPlayer: ''
  },
  mutations: {
    NEXT_PLAYER(state, value) {
      state.nextPlayer = value;
    }
  }
})
