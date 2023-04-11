<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseHeader from '@/components/UI/BaseHeader.vue'


</script>

<template>
  <BaseHeader />
  <button><RouterLink to="/">home</RouterLink></button>
<button><RouterLink to="/parameters">parameters</RouterLink></button>
<button><RouterLink to="/suggestions">suggestions</RouterLink></button>
<button><RouterLink to="/solution">solution</RouterLink></button>
  <Suspense>
<RouterView />
</Suspense>
</template>

<style scoped>

</style>

   