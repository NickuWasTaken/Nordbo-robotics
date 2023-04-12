<script setup async>
import { RouterLink, RouterView } from "vue-router";
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

const SavedStates = StateManager();

SavedStates.$patch({
		currentView: 2,
	})

  window.scrollTo(0, 0);

const parameterData = ParameterStore();
await parameterData.fetchParameterData();
var parameters = reactive(parameterData.dataObj);

let robotInformationCheck = ref(false);

console.log(SavedStates.selectedCategory)
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

   