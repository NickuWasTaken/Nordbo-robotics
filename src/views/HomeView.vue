<script setup>
import CategoryCard from '@/components/cards/CategoryCard.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
import { StateManager } from '@/stores/StateManager.js'
  
window.scrollTo(0, 0);
const SavedStates = StateManager();

// set progress for back button
	SavedStates.$patch({
		currentView: 1,
	})

</script>

<template>
    <StepByStep :progress="SavedStates.currentPage"/>



  <Suspense>
  <CategoryCard />
 </Suspense>

</template>

<style scoped>

</style>

   