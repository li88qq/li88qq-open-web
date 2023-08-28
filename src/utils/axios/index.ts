import axios from 'axios'
import {message} from 'ant-design-vue'
import type {AxiosError} from 'axios'

//实例
const instance = axios.create({
    //请求前缀
    baseURL: '/api',
    //超时时间,单位:毫秒
    timeout: 30 * 1000,
    //是否携带验证类参数,比如cookie
    withCredentials: true,
})

/**
 * 请求前
 */
instance.interceptors.request.use((config) => {
    return config
})

/**
 * 请求后
 */
instance.interceptors.response.use((res) => {
    const {config, status, data: resData, headers} = res
    //响应内容类型
    const contendType = headers['content-type']
    if (contendType !== 'application/json') {
        return res
    }
    //判断后台响应数据
    const post = config.method === 'post'
    let msgText = null
    const {code, msg, data} = resData
    if (code === 1) { //未登录,跳转登录页面
        location.replace('/login')
    } else if (code !== 0) {
        msgText = msg || post ? '操作失败' : '请求失败'
        message.error(msgText)
        return Promise.reject(new Error(msgText))
    }
    //操作类的请求
    if (post) {
        message.success('操作成功')
    }

    return Promise.resolve(data)
},(error:AxiosError) => {
    //响应状态码非200时,进入这里
    const {response,request,message:messageText} = error
    //没有响应,连接超时
    if(!response){
        if(messageText.startsWith('timeout')){
            message.error('连接超时')
            return Promise.reject(new Error('连接超时'))
        }
    }
    message.error('请求失败')
    return Promise.reject(new Error('请求失败'))
})

export default instance