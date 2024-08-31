import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login.vue";
import Navigation from "../views/Navigation.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'navigation',
            component: Navigation
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router