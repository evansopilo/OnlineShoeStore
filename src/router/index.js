import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductsList from "../views/ProductsList.vue"
import Admin from "../views/Admin.vue"
import AdminUsersList from "../views/admin/UsersList.vue"
import AdminProductsList from "../views/admin/ProductList.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsList
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path:'users',
        component: AdminUsersList
      },
      {
        path:'products',
        component: AdminProductsList
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
