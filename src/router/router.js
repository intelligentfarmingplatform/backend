import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  mode: 'history',
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
          name: 'Profile',
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
          component: () => import('@/views/dashboard/pages/Settingmember'),
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
        {
          name: 'Setting System',
          path: 'pages/Settingsystem',
          component: () => import('@/views/dashboard/pages/Settingsystem'),
        },
        {
          path: 'pages/UserProfile',
          component: () => import('@/views/dashboard/pages/UserProfile'),
          children: [
            {
              name:'ข้อมูลส่วนตัว',
              path:'/pages/UserProfile/profile',
              component: () => import('@/views/dashboard/component/Profile')
            },
            {
              name:'เปลี่ยนรห้สผ่าน',
              path:'/pages/UserProfile/password',
              component: () => import('@/views/dashboard/component/Password')
            },
            {
              name:'บัญชีธนาคาร',
              path:'/pages/UserProfile/backaccount',
              component: () => import('@/views/dashboard/component/Bankaccount')
            },
            {
              name:'รห้สซีเรียล',
              path:'/pages/UserProfile/serial',
              component: () => import('@/views/dashboard/component/Serial')
            },
          ],
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login/Login'),
    },
    {
      path: '*',
      component: () => import('@/views/Error/Error404'),
    },
  ],
})
