<template>
  <a-form v-bind="getBindValues">

  </a-form>
</template>
<script setup lang="ts">
import {onMounted, useSlots, useAttrs, computed} from 'vue'
import type {FormTypes,FormSchema} from './types'

const emit = defineEmits(['register', 'registerOk'])

const getProps = computed(() => {
  return {}
})

const getBindValues = computed(() => {
  return {}
})

onMounted(() => {
  emit('register')
  emit('registerOk')
})

</script>