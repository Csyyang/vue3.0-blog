import { createRouter, createWebHashHistory } from 'vue-router'
import posteriorCanal from './posteriorCanal'
import Home from '../views/home/Home.vue'

const route = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '../views/details.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
  },
]

let routes = route.concat(posteriorCanal)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
