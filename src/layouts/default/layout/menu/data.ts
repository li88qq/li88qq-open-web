import {h} from 'vue'
import {AppstoreOutlined} from '@ant-design/icons-vue'

const icon = h(AppstoreOutlined)

const initMenu = (size = 10, children = false) => {
    const menus = []
    for (let i = 0; i < size; i++) {
        const menu = {
            key: `00-${i}`,
            label: `菜单-${i}`,
            icon: icon,
        }
        if (children) {
            const childrens = []
            for (let j = 0; j < 5; j++) {
               childrens.push({
                   key: `11-${i}-${j}`,
                   label: `子菜单-${j}`,
               })
            }
            menu['children'] = childrens
        }
        menus.push(menu)
    }
    return menus
}

export const topMenu = initMenu(10,true)
export const topMenu2 = initMenu(10,false)
export const siderMenu = initMenu(10,true)