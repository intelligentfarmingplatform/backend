import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/pages/Dashboard'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Setting Members',
          path: 'pages/settingmenber',
          component: () => import('@/views/dashboard/pages/Settingmenber'),
        },
        {
          name: 'Sell Products',
          path: 'pages/sellproducts',
          component: () => import('@/views/dashboard/pages/SellProducts'),
        },
        {
          name: 'Sell Products',
          path: 'pages/order',
          component: () => import('@/views/dashboard/pages/Order'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/pages/Dashboard'),
        },
        {
          name: 'Login',
          path: 'pages/login',
          component: () => import('@/views/Login/Login'),
        },
      ],
    },
  ],
})
