<script setup async>
import { ref, reactive } from "vue";
import CategoryCard from "@/components/cards/CategoryCard.vue";
import RobotInformation from "@/components/UI/RobotInformation.vue";
import RobotInformationCard from "@/components/cards/RobotInformationCard.vue";
import HeadlineHeader from "@/components/UI/HeadlineHeader.vue";
import TypeCard from "@/components/cards/TypeCard.vue";
import ParametersSteps from "@/components/UI/ParametersSteps.vue";
import StepByStep from "@/components/UI/StepByStep.vue";
import { ParameterStore } from "@/stores/ParameterData.js";
import { StateManager } from '@/stores/StateManager.js'
import NextButton from '@/components/UI/NextButton.vue'

 window.scrollTo(0, 0);
const SavedStates = StateManager();

// set progress for back button
SavedStates.$patch({
		currentView: 2,
	})

// saves data in variable 
const parameterData = ParameterStore();
// get data from firebase, save data to pinia
await parameterData.fetchParameterData();
// save pinia data to variable 
var parameters = reactive(parameterData.dataObj);

// show next element 
let robotInformationCheck = ref(false);

// reset suggested solution to pinia 
const resetSolution = () => {
	SavedStates.$patch({
		suggestedSolution: []
	})
}

</script>

<template>
  <StepByStep :progress="SavedStates.currentPage" />
  <HeadlineHeader>Parameters</HeadlineHeader>
  <ParametersSteps />
  <div class="type-card-wrapper">
    <TypeCard @activateNext="robotInformationCheck = true" />
  </div>
  <div class="parameter-wrapper">
    <RobotInformation
      :parametersData="parameter"
      v-for="parameter in parameters"
      v-if="robotInformationCheck"
      :key="parameter.id"
    />
  </div>
  <RouterLink to="suggestions">
      <NextButton @check="resetSolution()"/>
    </RouterLink>
</template>

<style scoped>
.type-card-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 40px;
  max-width: 1240px;
  margin-bottom: 60px;
}
</style>

   