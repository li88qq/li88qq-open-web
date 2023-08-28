<template>
  <div>
    <div @click="open">
      <SettingOutlined style="font-size: 18px;"></SettingOutlined>
    </div>
    <SettingDrawer @register="register"></SettingDrawer>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive,defineAsyncComponent} from 'vue'
import {SettingOutlined} from '@ant-design/icons-vue'
import {useDrawer} from '@/components/drawer'

const SettingDrawer = defineAsyncComponent(()=>import('./component/index.vue'))

const [register,{open}] = useDrawer()


</script>