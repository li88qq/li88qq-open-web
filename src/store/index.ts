import {createPinia} from 'pinia'
import type {App} from 'vue'
import persistedPlugin from 'pinia-plugin-persistedstate'

/**
 * setup store
 * @param app
 */
export const setupStore = (app:App)=>{
    const pinia = createPinia()
    pinia.use(persistedPlugin)
    app.use(pinia)
}

export {useAppStore} from './modules/appStore'
export {useTooltipStore} from './modules/tooltipStore'
export {useMyStore} from './modules/myStore'
export {useMenuStore} from './modules/menuStore'