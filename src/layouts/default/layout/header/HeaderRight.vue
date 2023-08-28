<template>
  <div class="header-right">
    <Setting class="header-item"></Setting>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import Setting from './../setting/index.vue'

</script>
<style scoped>
.header-right{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}
::v-deep(.header-item){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 64px;
}
</style>