import Vue from 'vue'
import VueRouter from 'vue-router'
import list from './list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/registe"
  },
  {
    path:"/login",
    name:"login",
    component:_=>import("@pages/login")
},
{
    path:"/registe",
    name:"registe",
    component:_=>import("@pages/registe")
},
list
]

const router = new VueRouter({
  mode:"hash",
  routes
})

export default router
