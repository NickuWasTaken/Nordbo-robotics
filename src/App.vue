<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseHeader from '@/components/UI/BaseHeader.vue'

</script>

<template>
  <BaseHeader />
  <Suspense>
<RouterView />
</Suspense>
</template>

<style scoped>

</style>

   