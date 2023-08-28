import {createRouter, createWebHistory} from 'vue-router'
import {ROOT, PAGE_404, LOGIN} from './routes'

const routes = [PAGE_404,LOGIN]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router