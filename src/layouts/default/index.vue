<template>
    <MixLayout v-if="appStore.layout==='mix'"></MixLayout>
    <TopLayout v-else-if="appStore.layout==='top'"></TopLayout>
    <SiderLayout v-else-if="appStore.layout==='sider'"></SiderLayout>
    <MinLayout v-else-if="appStore.layout==='min'"></MinLayout>
    <MobileLayout v-else-if="appStore.layout==='mobile'"></MobileLayout>
    <MobileMenuDrawer @register="register"></MobileMenuDrawer>
</template>
<script setup lang="ts">
import {ref, reactive, defineAsyncComponent,watch} from 'vue'

const TopLayout = defineAsyncComponent(() => import('./layout/TopLayout.vue'))
const SiderLayout = defineAsyncComponent(() => import('./layout/SiderLayout.vue'))
const MixLayout = defineAsyncComponent(() => import('./layout/MixLayout.vue'))
const MinLayout = defineAsyncComponent(() => import('./layout/MinLayout.vue'))
const MobileLayout = defineAsyncComponent(() => import('./layout/MobileLayout.vue'))
const MobileMenuDrawer = defineAsyncComponent(()=>import('./layout/mobilemenu/index.vue'))

import {useDrawer} from '@/components/drawer'
import {useAppStore} from '@/store'

const appStore = useAppStore()

const [register,{open:openMenuDrawer}] = useDrawer()

watch(()=>appStore.layout,value => {
  if(value==='mobile'){
    openMenuDrawer()
  }
})


</script>
<style scoped>
::v-deep(.ant-menu-sub){
  background-color: unset !important;
}
</style>