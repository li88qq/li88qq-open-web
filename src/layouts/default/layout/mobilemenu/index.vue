<template>
  <BasicDrawer @register="register" v-bind="drawerRt">
    <Form></Form>
  </BasicDrawer>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import {BasicDrawer,useDrawer} from '@/components/drawer'
import Form from './Form.vue'

const drawerRt = reactive({
  closable:false,
  placement:'left',
  width:280,
  bodyStyle:{
    padding:0,
  }
})

const [register] = useDrawer()
</script>