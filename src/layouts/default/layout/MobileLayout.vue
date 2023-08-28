<template>
  <a-layout>
    <a-layout-header :style="getTopStyle">
      <HeaderRight></HeaderRight>
    </a-layout-header>
    <LayoutContent></LayoutContent>
  </a-layout>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import LayoutContent from './content/LayoutContent.vue'
import HeaderRight from './header/HeaderRight.vue'

import {getUnsetStyle,getTopStyle} from './hooks'
</script>