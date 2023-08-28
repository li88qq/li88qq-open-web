import {ref, unref,} from 'vue'
import type {DrawerMethods, DrawerInstance,RegisterFn,UseDrawerType} from './../types'

export const useDrawer = () :UseDrawerType=> {
    const drawerRef = ref<Partial<DrawerInstance>|null>(null)
    const uid = ref<string>('')

    const register = (instance: DrawerInstance, uuid: string) => {
        drawerRef.value = instance
        uid.value = uuid
    }

    const getInstance = (): DrawerInstance => {
        const instance = unref(drawerRef)
        if (!instance) {
            console.error('getInstance()未定义')
        }
        return instance as DrawerInstance;
    }

    const methods: DrawerMethods = {
        open: () => getInstance()?.setProps({open: true}),
        close: () => getInstance()?.setProps({open: false}),
        openLoading: () => getInstance()?.setProps({loading: true}),
        closeLoading: () => getInstance()?.setProps({loading: false}),
        getData:()=>{},
    }

    return [register, methods]
}