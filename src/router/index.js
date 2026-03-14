import { createRouter, createWebHistory } from 'vue-router'
import SelectCategoryView from '../views/SelectCategoryView.vue'
import HandymenListView from '../views/HandymenListView.vue'
import HandymanProfileView from '../views/HandymanProfileView.vue'
import RequestFormView from '../views/RequestFormView.vue'
import RequestsListView from '../views/RequestsListView.vue'
import RequestThreadView from '../views/RequestThreadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'select-category',
      component: SelectCategoryView
    },
    {
      path: '/category/:id',
      name: 'handymen-list',
      component: HandymenListView
    },
    {
      path: '/search',
      name: 'global-search',
      component: HandymenListView
    },
    {
      path: '/handyman-profile/:id',
      name: 'handyman-profile',
      component: HandymanProfileView
    },
    {
      path: '/request/:handymanId',
      name: 'request-form',
      component: RequestFormView
    },
    {
      path: '/requests',
      name: 'requests-list',
      component: RequestsListView
    },
    {
      path: '/requests/:reqId',
      name: 'request-thread',
      component: RequestThreadView
    },
    {
      path: '/profile',
      name: 'user-profile',
      component: () => import('../views/UserProfileView.vue')
    }
  ]
})

export default router
