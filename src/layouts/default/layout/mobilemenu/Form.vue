<template>
  <div :style="getSiderStyle">
    <Logo></Logo>
    <a-menu mode="inline" theme="dark" :items="siderMenu" :style="getSiderStyle"></a-menu>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import Logo from './../header/Logo.vue'
import {getSiderStyle} from './../hooks'
import {siderMenu} from './../menu/data'

</script>
<style scoped>
::v-deep(.ant-menu-sub){
  background-color: unset !important;
}
</style>