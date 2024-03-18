//Import tools
import { createRouter, createWebHistory } from 'vue-router';
/* import { useUserStore } from '../stores/user-store'; */

//Import components
import HomeView from '../views/HomeView.vue';

//Create routes
const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: HomeView
    },
    {
        path: '/conocenos',
        name: 'About',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/presupuesto/:service',
        name: 'Presupuesto',
        component: () => import('../views/QuoteView.vue')
    },
    {
        path: '/servicios/:id',
        name: 'Servicio',
        component: () => import('../views/OneServiceView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    }
];

//Create router
const router = createRouter({
    history: createWebHistory(),
    routes
});

//Add navigation guard
/* router.beforeEach(async (to, from, next) => {
    const requiredAuth = to.meta.auth;
    const userStore = useUserStore();

    if (userStore.token) {
        return next();
    }

    if (requiredAuth || localStorage.getItem('user')) {
        try {
            await userStore.refreshToken();

            if (userStore.token) {
                return next();
            }
            return next('acceder');
        } catch (error) {
            return next({ name: 'Inicio' });
        }
    }

    return next();
}); */

export default router;
