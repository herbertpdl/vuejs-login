import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Login from './components/Login'
import Register from './components/Register'
import UserList from './components/UserList'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/users',
      name: 'users',
      component: UserList,
      meta: { 
        requiresAuth: true
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }
})

export default router
