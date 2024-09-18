import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/Login.vue";
import Navigation from "../views/Navigation.vue";
import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";

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
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        }
    ]
})

export default router