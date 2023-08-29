<template>
  <a-layout>
    <a-layout-header class="layout-header" :style="getTopStyle">
      <HeaderLeft></HeaderLeft>
      <a-menu mode="horizontal" :items="menuStore.getTopMenu" :style="getTopStyle" theme="dark" @select="selectTopAc"></a-menu>
      <HeaderRight></HeaderRight>
    </a-layout-header>
    <a-layout class="layout-main">
      <a-layout-sider collapsible :style="getSiderStyle">
        <a-menu mode="inline" :items="menuStore.getSiderMenu" theme="dark" :style="getSiderStyle" @select="selectAc"></a-menu>
      </a-layout-sider>
      <LayoutContent></LayoutContent>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {ref, reactive,computed,onMounted} from 'vue'
import LayoutContent from './content/LayoutContent.vue'
import HeaderLeft from './header/HeaderLeft.vue'
import HeaderRight from './header/HeaderRight.vue'
import {getTopStyle,getSiderStyle} from './hooks'
import {useRouter} from 'vue-router'
import {cloneDeep} from 'lodash-es'
const { getRoutes, push } = useRouter();
import {useMenuStore} from '@/store'

const menuStore = useMenuStore()

//菜单
const menuRt = reactive({
  topMenu:[],
  siderMenu:[],
})

//初始化菜单
const initMenu = ()=>{
  const routes = getRoutes();
  const root = routes.find(item=>item.name==='ROOT')
  const menus =  cloneDeep(root.children||[])
  const topMenu = routerToMenu(menus);
  const siderMenu = routerToMenu(menus[0]?.children);
  menuRt.topMenu = topMenu
  menuRt.siderMenu = siderMenu
}

//路由转换为菜单
const routerToMenu = (routes=[])=>{
  return routes.map(item=>{
    const {path,meta,alias,children} = item
    const route = {
      key: alias || path,
      label:meta?.title,
      icon:meta?.icon
    }
    if(children && children.length>0){
      route['children'] = routerToMenu(children)
    }
    return route
  })
}

//选择菜单
const selectAc = ({key})=>{
  push(key)
}

//选择顶级菜单
const selectTopAc = ({key})=>{
  menuStore.updateTopMenu(key)
}

onMounted(()=>{
  initMenu()
})

</script>
<style scoped>
.layout-header{
  padding: 0;display: flex;flex-direction: row;align-items: center;
}
.layout-main{
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: row;
}
</style>