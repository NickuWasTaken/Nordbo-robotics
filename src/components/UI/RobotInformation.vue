<script setup>
import RobotInformationCard from "@/components/cards/RobotInformationCard.vue";
import { ref, computed, reactive, onMounted } from "vue";
import NextButton from "@/components/UI/NextButton.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

let active = ref(false);
let next = ref(false);

// const scrollBottom = () => {
//     let bottom = document.body.scrollHeight;
//     window.scrollTo(0, bottom);
// }

const props = defineProps({
  parametersData: {},
});

console.log(props.parametersData);
</script>

<template>
  <form class="wrapper" >
    <div class="production-type"  >
      <h2 class="production-type__header">{{ props.parametersData.name }}</h2>
      <p class="production-type__description"><div class="description-text" >{{ props.parametersData.describtion}}</div> </p>
      <form @click="scrollBottom()" action="">
        <RobotInformationCard @CheckedButton=" active = true, next = true  "  v-for="features in props.parametersData.features" :key="features.id"
      :parameterFeature="features" />  </form>
    </div>
    <RouterLink to="suggestions"><NextButton  v-if="next"/></RouterLink>
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

.wrapper:nth-child(even) .production-type{
  background-color: white;
}
</style>