import { createRouter, createWebHistory } from 'vue-router';
import {useAuthStore} from "@/stores/auth.js";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Home - Icon of Change LGB Ghana' }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { title: 'About Us - Icon of Change LGB Ghana' }
    },
    {
        path: '/programs',
        name: 'Programs',
        component: () => import('../views/Programs.vue'),
        meta: { title: 'Our Programs - Icon of Change LGB Ghana' }
    },
    {
        path: '/impact',
        name: 'Impact',
        component: () => import('../views/Impact.vue'),
        meta: { title: 'Our Impact - Icon of Change LGB Ghana' }
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: () => import('../views/Gallery.vue'),
        meta: { title: 'Gallery - Icon of Change LGB Ghana' }
    },

    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: { title: 'Contact Us - Icon of Change LGB Ghana' }
    },
    {
        path: '/donate',
        name: 'Donate',
        component: () => import('../views/Donate.vue'),
        meta: { title: 'Donate - Icon of Change LGB Ghana' }
    },

    {
        path: '/donation-success',
        name: 'DonationSuccess',
        component: () => import('../views/DonationSuccess.vue'),
        meta: { title: 'Thank You - Icon of Change LGB Ghana' }
    },



            //Admin Routes
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('../views/admin/Login.vue'),
        meta: { title: 'Admin Login - Icon of Change LGB Ghana', layout: 'blank', requiresGuest: true }
    },

    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: () => import('../views/admin/Dashboard.vue'),
        meta: {
            title: 'Dashboard - Admin',
            requiresAuth: true
        }
    },
    {
        path: '/admin/donations',
        name: 'AdminDonations',
        component: () => import('../views/admin/Donations.vue'),
        meta: {
            title: 'Donations - Admin',
            requiresAuth: true
        }
    },
    {
        path: '/admin/donators',
        name: 'AdminDonators',
        component: () => import('../views/admin/Donators.vue'),
        meta: {
            title: 'Donators - Admin',
            requiresAuth: true
        }
    },
    {
        path: '/admin/messages',
        name: 'AdminMessages',
        component: () => import('../views/admin/Messages.vue'),
        meta: {
            title: 'Messages - Admin',
            requiresAuth: true
        }
    },
    {
        path: '/admin/settings',
        name: 'AdminSettings',
        component: () => import('../views/admin/Settings.vue'),
        meta: {
            title: 'Settings - Admin',
            requiresAuth: true
        }
    },
    {
        path: '/admin',
        redirect: '/admin/dashboard'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFound.vue'),
        meta: {
            title: 'Page Not Found - Icon of Change LGB Ghana'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0, behavior: 'smooth' };
    }
});


// Navigation guards
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    // Set page title
    if (to.meta.title) {
        document.title = to.meta.title
    }

    // Check authentication requirements
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        // Redirect to login if auth required but not authenticated
        next({
            name: 'AdminLogin',
            query: { redirect: to.fullPath }
        })
        return
    }

    // Check guest requirements (redirect authenticated users away from auth pages)
    if (to.meta.requiresGuest && authStore.isAuthenticated) {
        next({ name: 'AdminDashboard' })
        return
    }

    next()
})



export default router;