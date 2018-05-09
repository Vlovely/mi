import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/index'
import Cate from '../page/cate/index'
import Cart from '../page/cart/index'
import User from '../page/user/index'
import Detail from '../page/detail/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})
