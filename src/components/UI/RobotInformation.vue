<script setup>
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import { ref, computed, reactive,  onMounted } from 'vue'
import NextButton from '@/components/UI/NextButton.vue'
import BaseButton from '@/components/UI/BaseButton.vue'



let active = ref(false)
let next = ref(false)

const scrollBottom = () => {
    let bottom = document.body.scrollHeight;
    window.scrollTo(0, bottom);
}



</script>

<template>
  <form class="wrapper" >
    <div class="production-type" >
      <h2 class="production-type__header ">Production type</h2>
      <p class="production-type__description">When choosing the right production type for a collaborative robot, it is important to consider the specific needs <br> and requirements of the production environment. Collaborative robots are designed to work alongside humans, <br> and they can be used for both high-volume and low-volume production.</p>
      <form @click="scrollBottom()" action=""><RobotInformationCard @CheckedButton=" active = true " /> </form>
    </div>
    <div class="production-type precision" id="precision" v-if="active" >
      <h2 class="production-type__header  ">Precision</h2>
      <p class="production-type__description">When choosing between a high precision or medium precision robot, it's important to consider the specific <br> needs and requirements of the application.</p>
      <form @click="scrollBottom()" action=""><RobotInformationCard @CheckedButton="next = true" /></form>
    </div> 
    <RouterLink to="suggestions"><NextButton  v-if="next"/></RouterLink>
  </form>
</template>

<style lang="scss" scoped>
.wrapper{
  margin: 0 auto;
    #precision{
    background-color: white;
  }
  .production-type{
      padding: auto;
      gap: 8px;
      width: 100vw;
      padding-bottom: 50px;
      background: #F4F4F4;
      margin-left: 0;
      padding-top: 32px;
    
      &__header{
        max-width: 1200px;
        height: 66px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 48px;
        line-height: 66px;
        color: #000000;
        margin:auto;
        margin-bottom: 8px;
        margin-top: 32px;
      }

      &__description{
        max-width: 1200px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #000000;
        margin:auto;
        margin-top: 8px;
        margin-bottom: 56px;
        
      }
    }
}





</style>