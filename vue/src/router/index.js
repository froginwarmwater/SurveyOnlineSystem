import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import Index from '../components/AppIndex/Index'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
          // meta: {
          // }
        }
      ]

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
