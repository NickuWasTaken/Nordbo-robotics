<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import CategoryCard from '@/components/cards/CategoryCard.vue'
import RobotInformation from '@/components/UI/RobotInformation.vue'
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import TypeCard from '@/components/cards/TypeCard.vue'
import ParametersSteps from '@/components/UI/ParametersSteps.vue'

let robotInformationCheck = ref(false)
</script>

<template>
  <HeadlineHeader>Parameters</HeadlineHeader>
  <ParametersSteps />
  <div class="type-card-wrapper">
    <TypeCard @activateNext="robotInformationCheck = true"/>
  </div>
  <RobotInformation v-if="robotInformationCheck"/>

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

   