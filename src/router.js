import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/product.vue'),
    },
    {
      path: '/productWallet',
      name: 'productWallet',
      component: () => import('./views/product/productWallet.vue'),
    },
    {
          path: '/productYjWallet',
          name: 'productYjWallet',
          component: () => import('./views/product/productYjWallet.vue'),
    },
    {
          path: '/ginExchage',
          name: 'ginExchage',
          component: () => import('./views/product/ginExchage.vue'),
    },
    {
          path: '/mainChain',
          name: 'mainChain',
          component: () => import('./views/product/mainChain.vue'),
    },
    {
          path: '/guExchange',
          name: 'guExchange',
          component: () => import('./views/product/guExchange.vue'),
    },
    {
      path: '/solution',
      name: 'solution',
      component: () => import('./views/solution.vue')
    },
    {
      path:'/about',
      name:'about',
      component: () => import('./views/about.vue')
    },
    {
      path:'/partner',
      name:'partner',
      component: () => import('./views/partner.vue')
    },
    {
      path: '/research',
      name:'research',
      component: () => import('./views/research.vue')
    },
    {
      path: '/viewkds',
      name: 'viewkds',
      component: () => import('./views/product/viewkds.vue')
    },
    {
      path: '/viewzscq',
      name: 'viewzscq',
      component: () => import('./views/product/viewzscq.vue')
    },

    {
      path: '/viewgs',
      name: 'viewgs',
      component: () => import('./views/product/viewgs.vue')
    },
    {
      path: '/viewjys',
      name: 'viewjys',
      component: () => import('./views/product/viewjys.vue')
    },
    {
      path: '/viewPdf',
      name: 'viewPdf',
      component: () => import('./views/product/viewPdf.vue')
    },
	  { path: '*', redirect:'home' }
  ]
})
