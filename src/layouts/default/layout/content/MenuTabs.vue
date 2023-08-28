<template>
  <a-card :body-style="bodyStyleRt" class="layout-tabs">
    <a-space style="display: flex;flex-direction: row;justify-content: flex-start;align-items: center;flex: 1;">
      <template v-for="item in keys" :key="item">
        <a-button :type="getType(item)" size="small" @click="clickAc(item)"
                  @mouseover="activeAc(item)"
                  @mouseleave="activeAc(null)"
        >
          <span>{{`菜单-${item}`}}</span>
          <div style="display: inline-block;margin-left: 8px;"
               :style="{visibility:getVisibility(item)}"
               @click.stop="closeAc(item)"
          >
            <CloseOutlined style="font-size: 12px;"/>
          </div>
        </a-button>
      </template>
    </a-space>
    <a-space>
      <a-button size="small">
        <template #icon>
          <RedoOutlined></RedoOutlined>
        </template>
      </a-button>
      <a-dropdown>
        <a-button size="small">
          <template #icon>
            <DownOutlined/>
          </template>
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">重新加载</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">关闭</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">关闭左侧</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">关闭右侧</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">关闭其他</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">关闭全部</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-button size="small">
        <template #icon>
          <FullscreenOutlined></FullscreenOutlined>
        </template>
      </a-button>
    </a-space>
  </a-card>
</template>
<script setup lang="ts">
import {ref,reactive,computed} from 'vue'
import {CloseOutlined,RedoOutlined,FullscreenOutlined,DownOutlined} from '@ant-design/icons-vue'

//当前选中标签
const selectKey = ref<number | null>(null)
//当前激活标签
const activeKey = ref<number|null>(null)
//标签页
const keys = ref([1,2,3,4,5,6,7,8,9,10])

//点击选中标签
const clickAc = (key:number) => {
  selectKey.value = key
}

//计算当前标签页样式
const getType = computed(() => {
  return (key:number)=>{
    return key === selectKey.value?'primary':'default'
  }
})

//关闭标签
const closeAc = (key:number)=>{
  keys.value = keys.value.filter(item=>item!==key)
}

//鼠标激活
const activeAc = (item:number|null)=>{
  activeKey.value = item
}

//是否可见
const getVisibility = computed(()=>{
  return (key:number)=>{
    return activeKey.value === key?'unset':'hidden'
  }
})

//标签页样式
const bodyStyleRt = reactive({
  padding:'6px 12px',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
})

</script>
<style scoped>
.layout-tabs{
  margin-top: 6px;
}
::v-deep(.ant-tabs-nav) {
  margin: 0;
}
</style>