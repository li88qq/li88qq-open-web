import {defineStore} from 'pinia'
import {getInfo, getMenu} from '@/api/my'
import {login, logout} from '@/api/login'

export interface MyInfo {
    username?: string,
    nickname?: string,
    createDate?: number,
    home?: string,
}

export interface MyMenu {

}

interface State {
    //是否已登录
    isLogin: boolean,
    //是否已初始菜单
    isInitMenu: boolean,
    //菜单列表
    menus: MyMenu[],
    info: MyInfo,
}

/**
 * 我的
 */
export const useMyStore = defineStore('myStore', {
    state: (): State => ({
        isLogin: false,
        isInitMenu: false,
        menus: [],
        info: {},
    }),
    actions: {
        //登录
        async loginAc(params) {
            await login(params)
            await this.initInfo()
        },
        async logoutAc() {
            await logout()
            this.$reset()
        },
        //初始化我的信息
        async initInfo() {
            const info = await getInfo()
            this.info = info as any as MyInfo
            this.isLogin = true
        },
        //初始化菜单
        async initMenu() {
            if (this.isInitMenu) {
                return;
            }
            const menus = await getMenu()
            this.menus = menus;
        },
    },
    persist:true,
})