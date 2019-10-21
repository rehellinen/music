/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/11/28 10:24
 */
import Vue from 'vue'
import App from './App'
import { router } from './utils/router'
import './assets/reset.css'

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
