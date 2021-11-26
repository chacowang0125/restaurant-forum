import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurant from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'root',
    redirect: '/signin'
}, {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
}, {
    path: '/signup',
    name: 'sign-up',
    component: () =>
        import ('../views/SignUp.vue') //動態載入，有需要再載入
}, {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurant

}, {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () =>
        import ('../views/RestaurantsFeeds.vue')
}, {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () =>
        import ('../views/RestaurantsTop.vue')
}, {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () =>
        import ('../views/Restaurant.vue')
}, {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () =>
        import ('../views/RestaurantDashboard.vue')
}, {
    path: '/users/top',
    name: 'users-top',
    component: () =>
        import ('../views/UsersTop.vue')
}, {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () =>
        import ('../views/UserEdit.vue')
}, {
    path: '/users/:id',
    name: 'user',
    component: () =>
        import ('../views/User.vue')
}, {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
}, {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () =>
        import ('../views/AdminRestaurants.vue')
}, {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () =>
        import ('../views/AdminRestaurantNew.vue')
}, {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () =>
        import ('../views/AdminRestaurantEdit.vue')
}, {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () =>
        import ('../views/AdminRestaurant.vue')
}, {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () =>
        import ('../views/AdminCategories.vue')
}, {
    path: '/admin/users',
    name: 'admin-users',
    component: () =>
        import ('../views/AdminUsers.vue')
}, {
    path: '*',
    name: 'not-found',
    component: NotFound
}]

//
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes
})

export default router