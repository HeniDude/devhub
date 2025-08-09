import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import { dashboardRoutes } from "./routes/dashboard/dashboard.routes.ts"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: { requiresAuth: false }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        meta: { requiresAuth: true },
        children: dashboardRoutes,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// // Защита маршрутов
// // routes.beforeEach((to, from, next) => {
// //     const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
// //
// //     if (to.meta.requiresAuth && !isAuthenticated) {
// //         next('/')
// //     } else if (to.path === '/' && isAuthenticated) {
// //         next('/dashboard')
// //     } else {
// //         next()
// //     }
// // })

// scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//         return savedPosition
//     } else {
//         return { top: 0 }
//     }
// }

export default router
