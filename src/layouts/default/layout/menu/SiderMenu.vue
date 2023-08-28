<template>
  <div>
    <a-menu mode="inline" :items="siderMenu"></a-menu>
  </div>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue'
import {siderMenu} from './data'

</script>