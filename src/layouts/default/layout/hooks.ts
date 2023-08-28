import {computed} from 'vue'
import {useAppStore} from '@/store'

const appStore = useAppStore()

//顶部颜色
export const getTopStyle = computed(()=>{
    return {
        backgroundColor: appStore.themeTop,
        color:'#fff'
    }
})

//侧边颜色
export const getSiderStyle = computed(()=>{
    return {
        backgroundColor: appStore.themeSider,
        color:'#fff'
    }
})

//没颜色
export const getUnsetStyle = computed(()=>{
    return {
        backgroundColor: 'unset',
    }
})

