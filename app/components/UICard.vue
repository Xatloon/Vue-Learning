<script setup lang="ts">
interface UICardProps {
  title: string
  description: string
}

const props = defineProps<UICardProps>()
</script>

<template>
  <div>
    <h3>
      {{ props.title }}
    </h3>
    <p>
      {{ props.description }}
    </p>
  </div>
</template>
