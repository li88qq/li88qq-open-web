import {defineStore} from 'pinia'

export interface Watermark {
    show: boolean,
    content?: string,
}

export interface State {
    //主题
    theme: string,
    //布局
    layout: string,
    //主题色
    colorPrimary: string,
    //顶部主题
    themeTop: string,
    //侧边主题
    themeSider: string,
    //灰色模式
    gray: boolean,
    //色弱模式
    invert: boolean,
    //水印
    watermark: Watermark,
    //国际化
    local: string,
}

/**
 * appStore
 */
export const useAppStore = defineStore('appStore', {
    state: (): State => ({
        theme: 'light',
        layout: 'mix',
        colorPrimary: '#1677ff',
        themeTop: '#5A54F9',
        themeSider: '#9E339F',
        gray: false,
        invert: false,
        watermark: {
            show: false,
            content: ''
        },
        local: 'zhCN',
    }),
    persist: true,
})