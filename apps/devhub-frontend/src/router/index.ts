import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import DashboardPage from '../pages/DashboardPage.vue'

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
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/mentors',
        name: 'DashboardMentors',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/students',
        name: 'DashboardStudents',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/groups',
        name: 'DashboardGroups',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/chats',
        name: 'DashboardChats',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/github',
        name: 'DashboardGitHub',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/communities',
        name: 'DashboardCommunities',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/events',
        name: 'DashboardEvents',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/resources',
        name: 'DashboardResources',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/gitlab',
        name: 'DashboardGitLab',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/dashboard/discord',
        name: 'DashboardDiscord',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// Защита маршрутов
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/')
    } else if (to.path === '/' && isAuthenticated) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
