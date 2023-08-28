<template>
  <div>
    <div>
      <a-form layout="horizontal" :label-col="{span:6}">
        <a-form-item label="主题">
          <a-radio-group :options="options_theme" v-model:value="getTheme"></a-radio-group>
        </a-form-item>
        <a-form-item label="布局">
          <a-radio-group :options="options_layout" v-model:value="getLayout"></a-radio-group>
        </a-form-item>
        <a-form-item label="主题色">
          <a-radio-group v-model:value="getColorPrimary">
            <template v-for="item in options_colorPrimary" :key="item.value">
              <a-radio :value="item.value" >
                <span :style="{color:'#fff',backgroundColor:item.value,padding:'0 10px'}">{{item.label}}</span>
              </a-radio>
            </template>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="顶部主题色">
          <a-radio-group v-model:value="getThemeTop">
            <template v-for="item in options_themeTop" :key="item.value">
              <a-radio :value="item.value" >
                <span :style="{color:'#fff',backgroundColor:item.value,padding:'0 10px'}">{{item.label}}</span>
              </a-radio>
            </template>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="侧边主题色">
          <a-radio-group v-model:value="getThemeSider">
            <template v-for="item in options_themeSider" :key="item.value">
              <a-radio :value="item.value" >
                <span :style="{color:'#fff',backgroundColor:item.value,padding:'0 10px'}">{{item.label}}</span>
              </a-radio>
            </template>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="灰色模式">
         <a-checkbox v-model:checked="getGray">灰色模式</a-checkbox>
        </a-form-item>
        <a-form-item label="色弱模式">
          <a-checkbox v-model:checked="getInvert">色弱模式</a-checkbox>
        </a-form-item>
        <a-form-item label="水印">
          <a-checkbox v-model:checked="getWatermark">启用</a-checkbox>
        </a-form-item>
        <a-form-item label="水印内容">
          <a-input v-model:value="getWatermarkContent" :disabled="!getWatermark"/>
        </a-form-item>

      </a-form>
    </div>

    <a-row>
      <a-col :offset="6" :span="18">
        <a-space direction="vertical" style="width: 100%;">
          <a-button type="default" danger block @click="resetAc">恢复默认值</a-button>
          <a-button type="primary" block>保存</a-button>
        </a-space>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive,computed} from 'vue'
import {useAppStore} from '@/store'
import {options_theme,options_layout,options_colorPrimary,options_themeTop,options_themeSider} from './data'

const appStore = useAppStore()

//重置store
const resetAc = ()=>{
  appStore.$reset()
}

//布局
const getLayout = computed({
  get:()=>appStore.layout,
  set:value=>appStore.$patch({layout:value})
})

//主题
const getTheme = computed({
  get:()=>appStore.theme,
  set:value=>appStore.$patch({theme:value})
})

//主题色
const getColorPrimary = computed({
  get:()=>appStore.colorPrimary,
  set:value=>appStore.$patch({colorPrimary:value})
})

//顶部主题
const getThemeTop = computed({
  get:()=>appStore.themeTop,
  set:value=>appStore.$patch({themeTop:value})
})

//侧边主题
const getThemeSider = computed({
  get:()=>appStore.themeSider,
  set:value=>appStore.$patch({themeSider:value})
})

//灰色模式
const getGray = computed({
  get:()=>appStore.gray,
  set:value=>appStore.$patch({gray:value})
})

//色弱模式
const getInvert= computed({
  get:()=>appStore.invert,
  set:value=>appStore.$patch({invert:value})
})

//水印是否启用
const getWatermark = computed({
  get:()=>appStore.watermark.show,
  set:value=>appStore.$patch({watermark: {show:value}})
})

//水印内容
const getWatermarkContent = computed({
  get:()=>appStore.watermark.content,
  set:value=>appStore.$patch({watermark: {content:value}})
})


</script>