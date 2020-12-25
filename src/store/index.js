import Vue from 'vue'
import Vuex from 'vuex'
import test from '@/store/modules/test'
Vue.use(Vuex)

const myPlugin = store => {
  // mutation 的格式为：{ type, payload }，通过这个对象可以判断是哪一个 mutation 被调用了，额外的参数是什么。
  store.subscribe((mutation, state) => {
  })
}
export default new Vuex.Store({
  modules: {
    test
  },
  plugins: [myPlugin],
  strict: process.env.NODE_ENV !== 'production'
})
