<script setup async>
import { ref, reactive } from "vue";
import RobotInformation from "@/components/UI/RobotInformation.vue";
import RobotInformationOptional from "@/components/UI/RobotInformationOptional.vue";
import HeadlineHeader from "@/components/UI/HeadlineHeader.vue";
import TypeCard from "@/components/cards/TypeCard.vue";
import ParametersSteps from "@/components/UI/ParametersSteps.vue";
import StepByStep from "@/components/UI/StepByStep.vue";
import { ParameterStore } from "@/stores/ParameterData.js";
import { StateManager } from "@/stores/StateManager.js";
import NextButton from "@/components/UI/NextButton.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

let active = ref(false);

window.scrollTo(0, 0);
const SavedStates = StateManager();

// set progress for back button
SavedStates.$patch({
  currentView: 2,
});

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
    suggestedSolution: [],
  });
};

let parameterProgress = ref(2);
async function addCount() {
  if (parameterProgress.value < 4) {
    parameterProgress.value++;
  }
}

const scrollDownElement = (id) => {
  // Get the element to scroll to using querySelector
  const currentElement = document.querySelector(
    ".parameter-wrapper form:nth-of-type(" + id + ")"
  );
  console.log(currentElement);
  console.log(id);
  // Get the height of the current element
  const elementHeight = currentElement.offsetHeight;

  // Scroll down by the height of the current element
  window.scrollBy({
    top: elementHeight,
    behavior: "smooth",
  });

  // Check if the element is at the top of the page and adjust if necessary
  const isElementAtTop = currentElement.getBoundingClientRect().top === 0;
  if (!isElementAtTop) {
    setTimeout(() => {
      window.scrollBy(0, elementHeight);
    }, 50);
  }
};


const scrollDown = () => {
	let bottom = document.body.scrollHeight;
	
	setTimeout(() => {
      window.scrollTo(0, bottom);;
    }, 50);
};

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
      :step="parameterProgress"
      v-for="parameter in parameters"
      :key="parameter.id"
      @scrollEmit="scrollDownElement(parameterProgress)"
      @addCount="addCount()"
    />
    <RouterLink to="suggestions" v-show="parameterProgress > 3">
      <NextButton style="margin-bottom:30px;"  @check="resetSolution()" />
    </RouterLink >
    <button class="optional" @click="active = !active, scrollDown()" >See optional</button>

    <div v-show="active">
      <div class="optional-header">
        <HeadlineHeader>Optional Parameters</HeadlineHeader>
      </div>
      <RobotInformationOptional
        :parametersData="parameter"
        v-for="parameter in parameters"
        :key="parameter.id"
       
      />
    </div>
  </div>
</template>

<style scoped lang="scss" >
.optional {
  display: flex;
  border: none;
  padding: 16px 40px;
  height: 56px;
  width: 190px;
  background: var(--nr-brand-bluemana-500);
  border-radius: 77px;
  font-family: var(--nr-font-default);
  font-size: 18px;
  line-height: 24px;
  margin: 20px auto;
  
}

.type-card-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 30px;
  max-width: 1230px;
  margin-bottom: 60px;
}

.optional-header {
  background-color: #f4f4f4;

  h1 {
    padding-top: 80px;
    margin-bottom: 0px !important;
    margin-top: 0;
  }
}
</style>
