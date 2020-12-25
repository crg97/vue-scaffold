import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './modules/index'

Vue.use(VueRouter)

const routes = [
  Index
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
