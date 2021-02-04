import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../View/Home/home'
import ZipCode from '../View/ZipCode/zipCode'
import GOTCitie from '../View/GOTCitie/gotCitie'

Vue.use(VueRouter)

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/ZipCode', name: 'CEP', component: ZipCode },
  { path: '/GOTCitie', name: 'GOT', component: GOTCitie }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
