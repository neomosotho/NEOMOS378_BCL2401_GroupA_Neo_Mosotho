import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProductDetails from '../components/ProductDetails.vue'
import CategoryProducts from '../components/CategoryProducts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/category/:category',
    name: 'CategoryProducts',
    component: CategoryProducts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router