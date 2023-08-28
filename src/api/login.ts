import {default as axios} from '@/utils/axios'

const Api = {
    LOGIN: '/login',//登录
    LOGOUT: '/logout',//登出
}

export const login = (params?) => axios.post(Api.LOGIN, params)
export const logout = (params?) => axios.post(Api.LOGOUT, params)