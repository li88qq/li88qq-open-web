<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsedRef" :style="getSiderStyle">
      <a-menu mode="inline" :items="siderMenu" theme="dark" :style="getSiderStyle"></a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="getTopStyle">
        <HeaderRight></HeaderRight>
      </a-layout-header>
      <LayoutContent></LayoutContent>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import LayoutContent from './content/LayoutContent.vue'
import HeaderRight from './header/HeaderRight.vue'
import {siderMenu} from './menu/data'
import {getUnsetStyle,getSiderStyle,getTopStyle} from './hooks'

const collapsedRef = ref(true)



</script>