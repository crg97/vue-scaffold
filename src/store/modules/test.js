const test = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    getCount: state => state.count
  },
  mutations: {
    setCount: (state, count) => {
      state.count = count
    }
  },
  actions: {
    updateCount({ state, commit }, count) {
      commit('setCount', count)
    }
  }
}
export default test
