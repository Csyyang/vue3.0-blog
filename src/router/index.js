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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

let routes = route.concat(posteriorCanal)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
