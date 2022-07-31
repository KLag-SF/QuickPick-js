import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectorComponent from "@/components/SelectorComponent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SelectorComponent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
