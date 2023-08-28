<template>
  <a-layout-content style="display: flex;flex-direction: column;">
<!--    <MenuTabs></MenuTabs>-->
    <div class="layout-content">
      <RouterView>
      </RouterView>
    </div>
  </a-layout-content>
</template>
<script setup lang="ts">
import {ref, reactive, computed} from 'vue'
import MenuTabs from './MenuTabs.vue'

</script>