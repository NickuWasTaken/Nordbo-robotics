<script setup async>
import RobotInformationCard from "@/components/cards/RobotInformationCard.vue";
import NextButton from "@/components/UI/NextButton.vue";
import { StateManager } from '@/stores/StateManager.js'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'

const SavedStates = StateManager()

// const scrollBottom = () => {
//     let bottom = document.body.scrollHeight;
//     window.scrollTo(0, bottom);
// }

// sends object to pinia 
const pushFeatureToPiniaArray = (featureId, parameterId) => {
  let data = SavedStates.selectedParameters
  // makes object 
  const ObjData = { feature: featureId, parameter: parameterId}
  data[featureId-1] = ObjData
  // overwrites selected data to object pinia
  SavedStates.$patch({
		selectedParameters: data
	})
}

const props = defineProps({
  parametersData: {},
});

const setNextStep = () =>{
  SavedStates.$patch({
		currentPage: 3
	})
}

</script>

<template>
  <form class="wrapper" v-if="props.parametersData.optional">
    <div class="production-type">
      <h2 class="production-type__header">{{ props.parametersData.name }}</h2>
      <p class="production-type__description">
      <div class="description-text">{{ props.parametersData.describtion }} </div>
      </p>
      <form action="">
        <RobotInformationCard @CheckedButton="pushFeatureToPiniaArray(props.parametersData.id, features.id), $emit('scrollEmit'), setNextStep()" v-for="features in props.parametersData.features"
          :key="features.id" :parameterFeature="features" />
      </form>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;

  .description-text {
    width: 900px;
  }

  form {
    display: flex;
    width: 1280px;
    margin: auto;
    flex-wrap: wrap;
  }

  #precision {
    background-color: var(--nr-white);
  }

  .production-type {
    padding: auto;
    gap: 8px;
    width: 100vw;
    padding-bottom: 50px;
    background: #f4f4f4;
    margin-left: 0;
    padding-top: 32px;

    &__header {
      max-width: 1200px;
      height: 66px;
      font-family: var(--nr-font-default);
      font-weight: 700;
      font-size: 48px;
      line-height: 66px;
      color: var(--nr-font-color-default);
      margin: auto;
      margin-bottom: 8px;
      margin-top: 32px;
    }

    &__description {
      max-width: 1200px;
      font-family: var(--nr-font-default);
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--nr-font-color-default);
      margin: auto;
      margin-top: 8px;
      margin-bottom: 56px;
    }
  }
}

.wrapper:nth-child(even) .production-type {
  background-color: var(--nr-white);
  
}


.wrapper:nth-child(1) .production-type {
  display: none;
  
}
</style>