<script setup>
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
import { ref, computed, reactive,  onMounted } from 'vue'


let active = ref(false)

const scrollBottom = () => {
          let bottom = document.body.scrollHeight;
          window.scrollTo(0, bottom);
        }



</script>

<template>
<form class="wrapper">
  <div class="production-type">
    <h2 class="production-type__header ">Production type</h2>
    <p class="production-type__description">When choosing the right production type for a collaborative robot, it is important to consider the specific needs and requirements of the production environment. Collaborative robots are designed to work alongside humans, and they can be used for both high-volume and low-volume production.</p>
    <form action=""><RobotInformationCard @click="active = true, scrollBottom()" /></form>
  </div>
  <div class="production-type precision" id="precision" v-if="active" >
    <h2 class="production-type__header  ">Precesion type</h2>
    <p class="production-type__description">When choosing between a high precision or medium precision robot, it's important to consider the specific needs and requirements of the application.</p>
    <form action=""><RobotInformationCard/></form>
  </div> 
      <button class="parameters" v-if="active" >See suggestions <div class="parameters__arrow"></div></button>

</form>
</template>

<style lang="scss" scoped>

  #precision{
    background-color: white;
  }
 .production-type{
    padding: 32px 120px 0px;
    gap: 8px;
    width: 100vw;
    height: 484px;
    background: #F4F4F4;
    margin-left: 0;

   
    &__header{
      width: 343px;
      height: 66px;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 48px;
      line-height: 66px;
      color: #000000;
      margin-bottom: 8px;
      margin-top: 32px;
    }
    &__description{
      max-width: 894px;
      height: 72px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #000000;
      margin-top: 8px;
      // margin-bottom: 56px;
    }
 }
 .parameters{
border:none;
padding: 16px 40px;
width: 240px;
height: 56px;
background: #62C3E9;
border-radius: 77px;
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: #000000;
display: flex;
cursor: pointer;
margin: 50px auto 120px auto;
&__arrow{
    width: 15px;
    height: 11px;
    background-image: url("@/assets/icons/arrow-button-right.png");
    background-size: cover;
    margin: auto;
}}



</style>