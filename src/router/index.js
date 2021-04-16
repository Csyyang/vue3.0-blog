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
    component: () => import(/* webpackChunkName: "details" */ '../views/details.vue')
  },
  {
    path: '/list/:type',
    name: 'List',
    component: () => import('../views/list.vue')
  },
  {
    path: '/messageBoard',
    name: 'MessageBoard',
    component: () => import('../views/messageBoard.vue')
  }
]

let routes = route.concat(posteriorCanal)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
