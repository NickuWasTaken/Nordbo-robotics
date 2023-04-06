<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CategoryCard from '@/components/cards/CategoryCard.vue'
import RobotInformation from '@/components/UI/RobotInformation.vue'
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
</script>

<template>
  <StepByStep progress="4"/>
  <HeadlineHeader>Solutions</HeadlineHeader>
  <RobotInformation />
</template>

<style scoped></style>

   