import Vue from 'vue'
import Router from 'vue-router'
import Banner from '../components/banner/banner'

Vue.use(Router)

const routes = [
  { path: '/', component: Banner }
]

export const router = new Router({
  routes
})
