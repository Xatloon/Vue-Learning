<script setup lang="ts">
import { zhCn } from 'element-plus/es/locales'
</script>

<template>
  <ElConfigProvider :local="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>
