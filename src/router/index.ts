import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ListView from '../views/ListView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/list-view',
        name: ':list-view',
        component: ListView,
    },
    {
        path: '/new',
        name: 'New',
        component: () => import('../views/New.vue'),
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: () => import('../views/Edit.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/develop',
        name: 'Develop',
        component: () => import('../views/Develop.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
