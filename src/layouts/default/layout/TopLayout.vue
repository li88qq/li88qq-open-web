<template>
  <a-layout>
    <a-layout-header class="layout-header" :style="getTopStyle">
      <HeaderLeft></HeaderLeft>
      <a-menu mode="horizontal" :items="topMenu" theme="dark" :style="getTopStyle"></a-menu>
      <HeaderRight></HeaderRight>
    </a-layout-header>
    <LayoutContent></LayoutContent>
  </a-layout>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue'
import LayoutContent from './content/LayoutContent.vue'
import HeaderLeft from './header/HeaderLeft.vue'
import HeaderRight from './header/HeaderRight.vue'

import {topMenu} from './menu/data'
import {getTopStyle,getSiderStyle} from './hooks'

</script>
<style scoped>
.layout-header{
  padding: 0;display: flex;flex-direction: row;align-items: center;
}
</style>