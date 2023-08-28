import {default as axios} from '@/utils/axios'

const Api = {
    MY_INFO: '/my/info',//我的信息
    MY_MENU: '/my/menu',//我的菜单
}

export const getInfo = (params?) => axios.get(Api.MY_INFO, {params})
export const getMenu = (params?) => axios.get(Api.MY_MENU, {params})