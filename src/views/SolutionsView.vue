<script setup>
import SolutionChoice from '@/components/UI/SolutionChoice.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
import { StateManager } from '@/stores/StateManager.js'

window.scrollTo(0, 0);

// set progres for back button
const SavedStates = StateManager();
SavedStates.$patch({
		currentView: 4,
	})
</script>

<template>
  <StepByStep :progress="SavedStates.currentPage"/>
  <HeadlineHeader>Suggested Solution</HeadlineHeader>
  <SolutionChoice />
  
</template>

<style lang="scss" scoped>

</style>

   