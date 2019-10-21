import Vue from 'vue'
import Router from 'vue-router'
import Banner from '../components/banner/banner'
import Hot from '../components/hot/hot'

Vue.use(Router)

const routes = [
  { path: '/', component: Banner },
  { path: '/hot', component: Hot }
]

export const router = new Router({
  routes
})
