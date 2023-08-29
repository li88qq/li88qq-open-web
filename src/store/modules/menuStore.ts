import {defineStore} from 'pinia'
import {getMenu} from '@/api/my'
import type {Router, RouteRecordRaw} from 'vue-router'
import {cloneDeep} from 'lodash-es'
import {RouterView} from 'vue-router'
import {ROOT} from '@/router/routes'
import {useAppStore} from '@/store'

//开发中页面
const DEV_PAGE = ()=>import('@/views/dev.vue')

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
    menuTree: [],
    topMenu: string | number | null,
}

/**
 * 我的
 */
export const useMenuStore = defineStore('menuStore', {
    state: (): State => ({
        isInit: false,
        menus: [],
        topMenu: null,
        menuTree: [],
    }),
    getters: {
        getLayout() {
            const appStore = useAppStore()
            return appStore.layout
        },
        getTopMenu(state) {
            const layout = this.getLayout
            const menus = cloneDeep(state.menus)
            if (layout === 'mix') {
                return menus.filter(item => item.parentId === 0).map(item => {
                    return {
                        label: `${item.name}`,
                        key: `${item.id}`
                    }
                })
            }
            return []
        },
        getSiderMenu(state) {
            const layout = this.getLayout
            if (layout === 'mix') {
                if (!this.topMenu) {
                    return []
                }
                const parent = state.menuTree.find(item=>`${item['id']}`===`${state.topMenu}`)
                if(parent){
                    const arr = parent?.children?.map(item=>{
                       return {
                           label: `${item.name}`,
                           key: `${item.href||item.id}`
                       }
                   })
                    return arr
                }
            }
            return null
        }
    },
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
            const modules = import.meta.glob('@/views/**/*.vue')
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
            this.menuTree = cloneDeep(tree);
            const childrenRoutes = this.convertToRoute(tree,modules)
            ROOT.children = childrenRoutes
            router.addRoute(ROOT)
        },
        //菜单转换为路由
        convertToRoute(tree: Menu[],modules={}): RouteRecordRaw[] {
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
                    const childrenRoutes = this.convertToRoute(children,modules)
                    route['children'] = childrenRoutes
                    component = RouterView
                } else {
                    //判断是否存在
                    const comp = `/src/views${href}/index.vue`;
                    component = modules[comp]||DEV_PAGE

                    alias = href
                }
                route['component'] = component
                if (alias) {
                    route['alias'] = alias
                }
                return route
            })
        },
        //更新top菜单
        updateTopMenu(key: string | number) {
            this.topMenu = key
        }
    },
})