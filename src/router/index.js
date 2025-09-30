import { createRouter, createWebHistory } from 'vue-router';

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
        path: '/donate',
        name: 'Donate',
        component: () => import('../views/Donate.vue'),
        meta: { title: 'Donate - Icon of Change LGB Ghana' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: { title: 'Contact Us - Icon of Change LGB Ghana' }
    },
    {
        path: '/donation-success',
        name: 'DonationSuccess',
        component: () => import('../views/DonationSuccess.vue'),
        meta: { title: 'Thank You - Icon of Change LGB Ghana' }
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Icon of Change LGB Ghana';
    next();
});

export default router;