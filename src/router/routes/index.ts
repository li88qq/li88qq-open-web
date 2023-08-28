import type {RouteRecordRaw} from 'vue-router'

export const ROOT :RouteRecordRaw = {
    path:'/',component:()=>import('@/layouts/default/index.vue'),name:'ROOT'
}

export const PAGE_404:RouteRecordRaw={
    path: '/:pathMatch(.*)*', name: '404', component: () => import('@/views/error/404.vue')
}

export const LOGIN:RouteRecordRaw={
    path: '/login', name: 'LOGIN', component: () => import('@/views/login/index.vue')
}