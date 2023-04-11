<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
import CategoryCard from '@/components/cards/CategoryCard.vue'
import RobotInformation from '@/components/UI/RobotInformation.vue'
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import TypeCard from '@/components/cards/TypeCard.vue'
import ParametersSteps from '@/components/UI/ParametersSteps.vue'
import StepByStep from '@/components/UI/StepByStep.vue'

import { ParameterStore } from '@/stores/ParameterData.js';


const parameterData = ParameterStore();
await parameterData.fetchParameterData();
var parameters = reactive(parameterData.dataObj);


let robotInformationCheck = ref(false)
</script>

<template>
    <StepByStep progress="2"/>
  <HeadlineHeader>Parameters</HeadlineHeader>
  <ParametersSteps />
  <div class="type-card-wrapper">
    <TypeCard @activateNext="robotInformationCheck = true"/>
  </div>
  <div class="parameter-wrapper">  <RobotInformation v-if="robotInformationCheck" :parametersData="parameter" v-for="parameter in parameters" :key="parameter.id" />
</div>
</template>

<style scoped>
.type-card-wrapper{
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 40px;
  max-width: 1240px;
  margin-bottom: 60px;
}

</style>

   