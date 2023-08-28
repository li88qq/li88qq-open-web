<template>
  <a-drawer v-bind="getBindValues" @close="onClose">
    <a-spin v-if="spinningRt.show" :spinning="spinningRt.spinning">
    </a-spin>
    <slot></slot>
    <template #[item]="data" v-for="item in Object.keys(slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-drawer>
</template>
<script setup lang="ts">
import {ref, reactive, computed, onMounted, getCurrentInstance, unref, useAttrs, toRaw,useSlots} from 'vue'
import type {DrawerCustomProps, DrawerInstance} from './types'
import type {DrawerProps} from 'ant-design-vue'


//是否显示
const openRef = ref(false)
//属性对象
const propsRt = reactive<DrawerCustomProps>({
  open:false,
  loading:false,
  detail:false,
})

//触发
const emit = defineEmits(['register'])
//属性
const attr = useAttrs()
const slots = useSlots()

//加载中
const spinningRt = reactive({
  show: false,
  spinning: false,
})
//设置属性
const setProps = (props: DrawerCustomProps) => {
  Object.assign(propsRt,props)
  openRef.value = propsRt.open
}

const drawerInstance: DrawerInstance = {
  setProps: setProps as any
}

//绑定属性
const getBindValues = computed((): DrawerProps => {
  const props = {
    ...unref(attr),
    ...toRaw(propsRt),
    open:unref(openRef),
  }
  return props as DrawerProps
})

//关闭
const onClose = () => {
  openRef.value = false
}

//初始化
const init = () => {
  const instance = getCurrentInstance()
  emit('register', drawerInstance, instance.uid)
}

onMounted(() => {
  init()
})

</script>