import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },

  {
    path: '/start',
    component: () => import('@/views/StartPage.vue')
  },

  {
    path: '/splash',
    component: () => import('@/views/SplashPage.vue')
  },
  {
    path: '/forgotpassword',
    component: () => import('@/views/ForgotpasswordPage.vue')
  },
  {
    path: '/createaccount',
    component: () => import('@/views/CreateaccountPage.vue')
  },
  {
    path: '/forgotpasswordtwo',
    component: () => import('@/views/ForgotpasswordtwoPage.vue')
  },
  {
    path: '/forgotpasswordtre',
    component: () => import('@/views/ForgotpasswordtrePage.vue')
  },
  // {
  //   path: '/tabs/',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tab1Page.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2Page.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3Page.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
