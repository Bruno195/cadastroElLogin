import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import User from "../views/User.vue"
import Edit from "../views/Edit.vue"

Vue.use(VueRouter)

const routes = [
  
  {
    path: "/register",
    name: "Register",
    component: Register


  },
  {
    path: "/user",
    name: "User",
    component: User,
    
    
  },

  {

    path: "/",
    name: "Login",
    component: Login

  },
  { 
    path: "/edit",
    name: "Edit",
    component: Edit
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
