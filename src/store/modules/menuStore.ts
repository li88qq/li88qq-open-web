import {defineStore} from 'pinia'
import {getMenu} from '@/api/my'
import type {Router, RouteRecordRaw} from 'vue-router'
import {cloneDeep} from 'lodash-es'
import {RouterView} from 'vue-router'
import {ROOT} from '@/router/routes'

export interface Menu {
    id: number,
    parentId: number,
    name: string,
    href: string,
    icon: string,
    tabHref: string,
    children?: Menu[],
}

interface State {
    //是否已初始菜单
    isInit: boolean,
    //菜单列表
    menus: Menu[],
}

/**
 * 我的
 */
export const useMenuStore = defineStore('menuStore', {
    state: (): State => ({
        isInit: false,
        menus: [],
    }),
    actions: {
        //初始化菜单
        async initMenu(router: Router) {
            if (this.isInit) {
                return;
            }
            const menus = await getMenu()
            this.menus = menus as any as Menu[]
            this.isInit = true
            this.initRouter(router)
        },
        //初始化路由
        initRouter(router: Router) {
            const menus = cloneDeep(this.menus)
            const idMap = {}
            menus.forEach((item, index) => {
                idMap[item.id] = index
            })
            menus.forEach(menu => {
                const {id, name, parentId, href} = menu
                if (parentId > 0) {
                    const parentIndex = idMap[parentId]
                    if (parentIndex >= 0) {
                        const parent = menus[parentIndex]
                        const children = parent['children'] || []
                        children.push(menu)
                        parent['children'] = children
                    }
                }
            })
            const tree = menus.filter(item => item.parentId === 0)
            const childrenRoutes = this.convertToRoute(tree)
            ROOT.children = childrenRoutes
            router.addRoute(ROOT)
        },
        //菜单转换为路由
        convertToRoute(tree: Menu[]): RouteRecordRaw[] {
            return tree.map(item => {
                const {id, name, children, href,} = item
                let component = null
                let alias = undefined
                const route = {
                    path: `${id}`,
                    meta: {
                        title: name,
                    },
                }
                if (children && children.length > 0) {
                    const childrenRoutes = this.convertToRoute(children, )
                    route['children'] = childrenRoutes
                    component = RouterView
                } else {
                    component = () => import('@/views/dev.vue')
                    alias = href
                }
                route['component'] = component
                if(alias){
                    route['alias'] = alias
                }
                return route
            })
        }
    },
})