<script setup lang="ts">
import { zhCn } from 'element-plus/es/locales'
</script>

<template>
  <ElConfigProvider
    :locale="zhCn"
    :button="{
      autoInsertSpace: false,
    }"
  >
    <RouterView />
  </ElConfigProvider>
</template>
