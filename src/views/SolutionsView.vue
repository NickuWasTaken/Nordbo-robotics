<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SolutionChoice from '@/components/UI/SolutionChoice.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
</script>

<template>
  <StepByStep progress="4"/>
  <HeadlineHeader>Suggested Solution</HeadlineHeader>
  <SolutionChoice />
  
</template>

<style lang="scss" scoped>

</style>

   