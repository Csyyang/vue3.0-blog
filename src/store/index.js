import { createStore } from 'vuex'

export default createStore({
  state: {
    root: false
  },
  mutations: {
    changeRoot(state,value) {
      state.root = value
    }
  },
  actions: {
  },
  modules: {
  }
})
