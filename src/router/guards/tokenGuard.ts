import type {Router} from 'vue-router'
import {useMyStore, useMenuStore} from '@/store'

/**
 * 登录拦截
 * @param router
 */
export const useTokenGuard = (router: Router) => {
    router.beforeEach(async (to, from) => {
        const myStore = useMyStore()
        if (!myStore.isLogin) {
            if (to.name !== 'LOGIN') {
                return {path: '/login', name: 'LOGIN'}
            }
            return;
        }
        const menuStore = useMenuStore()
        if (to.name === '404' && !menuStore.isInit) {
            await menuStore.initMenu(router)
            // 触发重定向
            return to.fullPath
        }
    })
}