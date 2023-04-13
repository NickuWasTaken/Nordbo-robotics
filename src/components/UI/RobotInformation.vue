<script setup async>
import RobotInformationCard from "@/components/cards/RobotInformationCard.vue";
import { ref, reactive } from "vue";
import NextButton from "@/components/UI/NextButton.vue";
import { StateManager } from '@/stores/StateManager.js'

const SavedStates = StateManager()

let next = ref(false);

// const scrollBottom = () => {
//     let bottom = document.body.scrollHeight;
//     window.scrollTo(0, bottom);
// }

const pushFeatureToPiniaArray = (featureId, parameterId) => {
  let data = SavedStates.selectedParameters
  const ObjData = { feature: featureId, parameter: parameterId}
  data[featureId-1] = ObjData
  SavedStates.$patch({
		selectedParameters: data
	})
  setTimeout(
    console.log(SavedStates.selectedParameters), 500
  )
}

const props = defineProps({
  parametersData: {},
});

console.log("id:" + props.parametersData.id);

let test = reactive(0)
let parameterID = reactive(props.parametersData.id)

</script>

<template>
  <form class="wrapper">
    <div class="production-type">
      <h2 class="production-type__header">{{ props.parametersData.name }}</h2>
      <p class="production-type__description">
      <div class="description-text">{{ props.parametersData.describtion }} </div>
      </p>
      <form action="">
        <RobotInformationCard @CheckedButton=" pushFeatureToPiniaArray(props.parametersData.id, features.id)" v-for="features in props.parametersData.features"
          :key="features.id" :parameterFeature="features"/>
      </form>
    </div>
    <RouterLink to="suggestions">
      <NextButton />
    </RouterLink>
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
    background-color: white;
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
      font-family: "Roboto";
      font-weight: 700;
      font-size: 48px;
      line-height: 66px;
      color: #000000;
      margin: auto;
      margin-bottom: 8px;
      margin-top: 32px;
    }

    &__description {
      max-width: 1200px;
      font-family: "Roboto";
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #000000;
      margin: auto;
      margin-top: 8px;
      margin-bottom: 56px;
    }
  }
}

.wrapper:nth-child(odd) .production-type {
  background-color: white;
  
}


.wrapper:nth-child(1) .production-type {
  display: none;
  
}
</style>