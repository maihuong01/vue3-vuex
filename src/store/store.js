import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      listPerson: []
    }
  },
  mutations: {
    increasedOption(state, payload) {
      console.log('🚀  state ==', state)
      state.count += payload
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    nameCount(state) {
      return state.count * 2 + ' name'
    }
  }
})
export default store
