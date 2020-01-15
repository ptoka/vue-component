const Index = () => import('../views/Index.vue')
const Cart = () => import('../views/Cart.vue')
const Category = () => import('../views/Category.vue')
const Profile = () => import('../views/Profile.vue')
export default [
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]
