<template>
  <teleport to="body">
    <div v-show="getShow">
      <div class="ant-tooltip ant-tooltip-purple"
           :class="getClass" :style="getStyle"
           @mouseover="activeAc(true)" @mouseleave="activeAc(false)">
        <div class="ant-tooltip-content" ref="innerRef">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content"></span>
          </div>
          <div class="ant-tooltip-inner" role="tooltip">
            {{ tooltipStore.getText }}
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import {ref, reactive, computed, watch} from 'vue'
import {useDebounceFn, useElementSize} from '@vueuse/core'
import {useTooltipStore} from '@/store'
import {theme} from 'ant-design-vue'

//内容dom
const innerRef = ref()

//store
const tooltipStore = useTooltipStore()
//样式
const {hashId} = theme.useToken()

//监听内容dom
const {width: textWidth, height: textHeight} = useElementSize(innerRef)

//当前是否激活
const activeRef = ref(false)
//距离dom底部距离
const textMarginRef = ref(12)

//当前dom激活
const activeAc = (flag: boolean) => {
  activeRef.value = flag
}

//是否显示
const getShow = computed(() => {
  return tooltipStore.el && tooltipStore.text
})

//计算样式
//需要考虑滚动条,当前对象为body
const getStyle = computed(() => {
  let top = 0
  let left = 0

  const el = tooltipStore.el
  if (el) {
    const {left: elLeft, top: elTop, bottom: elBottom, width: elWidth} = el.getBoundingClientRect()
    //内容宽度比dom宽度大
    if (textWidth.value <= elWidth) {
      left = Math.floor(elLeft + window.scrollX + (elWidth - textWidth.value) / 2)
    } else {
      left = Math.floor(elLeft + window.scrollX - (textWidth.value - elWidth) / 2)
    }
    const placement = getPlacement.value
    if (placement === 'bottom') {
      top = Math.floor(elBottom + window.scrollY)
    } else {
      top = Math.floor(elTop + window.scrollY - textHeight.value - textMarginRef.value)
    }
  }

  return {
    top: `${top}px`,
    left: `${left}px`,
  }
})

//隐藏
const debounceFn = useDebounceFn((value) => {
  if (!value[0] && !activeRef.value) {
    tooltipStore.$reset()
  }
}, 100)

//监听是否显示
watch(() => [tooltipStore.show, activeRef.value], debounceFn)

//获取class
const getClass = computed(() => {
  const clazz = []
  const placement = getPlacement.value
  clazz.push(hashId.value)
  clazz.push(`ant-tooltip-placement-${placement}`)
  return clazz
})

//计算显示位置,默认top
const getPlacement = computed(() => {
  const el = tooltipStore.el
  if (el) {
    const {top: elTop} = el.getBoundingClientRect()
    //如果dom元素top小于内容高度,则在dom下显示
    if (elTop <= textHeight.value) {
      return 'bottom'
    }
  }
  return 'top'
})

</script>
<style scoped>
.ant-tooltip-inner {
  white-space: break-spaces;
}
</style>