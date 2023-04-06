<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CategoryCard from '@/components/cards/CategoryCard.vue'
import RobotInformation from '@/components/UI/RobotInformation.vue'
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import SearchBar from '@/components/UI/SearchBar.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
</script>

<template>
    <StepByStep progress="1"/>
  <SearchBar />
  <CategoryCard />
 

</template>

<style scoped>

</style>

   