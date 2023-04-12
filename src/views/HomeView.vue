<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CategoryCard from '@/components/cards/CategoryCard.vue'
import RobotInformation from '@/components/UI/RobotInformation.vue'
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
import { StateManager } from '@/stores/StateManager.js'

const SavedStates = StateManager();

	SavedStates.$patch({
		currentView: 1,
	})

  window.scrollTo(0, 0);
</script>

<template>
    <StepByStep :progress="SavedStates.currentPage"/>



  <Suspense>
  <CategoryCard />
 </Suspense>

</template>

<style scoped>

</style>

   