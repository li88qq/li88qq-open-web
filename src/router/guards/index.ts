import type {Router} from 'vue-router'
import {useTokenGuard} from './tokenGuard'

/**
 * 路由拦截
 * @param router
 */
export const setupRouterGuard = (router: Router) => {
    useTokenGuard(router)
}