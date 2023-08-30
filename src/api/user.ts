import {default as axios} from '@/utils/axios'

const Api = {
    USER_SAVE: '/user/save',//新增
    USER_PAGE: '/user/getPage',//分页查询
}

export const saveUser = (params?) => axios.post(Api.USER_SAVE, params)
export const getPage = (params?) => axios.get(Api.USER_PAGE, {params})