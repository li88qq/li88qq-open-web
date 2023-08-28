<template>
  <BasicDrawer v-bind="drawerRt">
    <Form></Form>
  </BasicDrawer>
</template>
<script setup lang="ts">
import {ref, reactive, defineAsyncComponent} from 'vue'
import {BasicDrawer, useDrawer} from '@/components/drawer'

const Form = defineAsyncComponent(() => import('./Form.vue'))

const drawerRt = reactive({
  width:480,
  title:'自定义设置'
})

</script>