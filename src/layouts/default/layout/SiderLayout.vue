<template>
  <a-layout>
    <a-layout-sider collapsible :style="getSiderStyle">
      <Logo></Logo>
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
import Logo from './header/Logo.vue'
import HeaderRight from './header/HeaderRight.vue'
import {siderMenu} from './menu/data'
import {getUnsetStyle,getSiderStyle,getTopStyle} from './hooks'

</script>