<template>
  <div style="display: inline-flex;flex-direction: row;justify-content: flex-end;align-items: center;">
    <a-menu mode="horizontal" :items="topMenu"></a-menu>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import {topMenu} from './data'

</script>