<template>
  <div class="wrapper" v-for="card in productTypeData" :key="card.id">
    <div class="card" :class="{'card--active': card.active }" >
      <div class="card__image">
        <img :src="`/images/${card.image}.png`" alt="">
        <div v-if="card.active" class="card__image__selected">
        <img src="@/assets/images/image-checkmark.png" alt="" />
      </div>
      </div>
      <div class="card__content">
        <h4 class="card__content__header">{{ card.name }}</h4>
        <p class="card__content__paragraph">{{ card.describtion }}</p>
        <BaseButton @checkedButton="setActiveCard(card.id), $emit('activateNext')"/>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import BaseButton from '@/components/UI/BaseButton.vue'

  let active = ref(false);

  const props = defineProps({
  })

  const productTypeData = reactive([
    {
    id: 1,
    name: 'Industrial',
    describtion: 'Industrial robot applications offer numerous benefits, such as increased productivity, improved quality and consistency, reduced labor costs, and enhanced workplace safety',
    image: 'springfieldevice',
    active: false
  },
  {
    id: 2,
    name: 'Collaborative',
    describtion: 'Collaborative robots are designed to perform a wide range of tasks in various industries, including manufacturing, healthcare, and logistics and many more',
    image: 'springfieldevice-2',
    active: false
  }
])

  const setActiveCard = (id) => {
    let i = 0
  while(productTypeData[i]){
    productTypeData[i].active = false
    i++
  }
  productTypeData[id-1].active = !productTypeData[id-1].active  
  console.log(productTypeData[id].active)
  
  setTimeout(() => {
    scrollBottom()
  }, 100)
}

const scrollBottom = () => {
    let bottom = document.body.scrollHeight;
    window.scrollTo(0, bottom);
}
  </script>
  
  <style lang="scss" scoped>
  .wrapper .wrapper:nth-child(2){
    .card__image{
    background: #DFDBD9;
    }
  }

  .card {
    display: flex;
    width: 590px;
    flex-direction: column;
    margin: 0 auto;
    border: solid 2px var(--color-background-soft);
    border-radius: 15px;
    box-shadow: 2px 6px 16px 0px rgba(0, 0, 0, 0.08);
    
  
    &__image {
      border-radius: 10px 10px 0 0;
      background: #c9d2d3;
      display: block;
      height: 460px;
      width: 590px;
      display: flex;
      align-items: center;
      justify-content: center;
  
      &__selected {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        background: rgba(98, 195, 233, 0.3);
      }
    }
  
    &__content {
      background-color: #fff;
      padding: 16px;
      width: 590px;
      height: 264px;
      border-radius: 0 0 10px 10px;
  
      &__header {
        margin: 0;
        text-transform: uppercase;
      }
  
      &__paragraph {
        margin: 0;
        margin-top: 16px;
        margin-bottom: 32px;
      }
  
      &__button {
        display: inline-block;
        padding: 16px 40px;
        border-radius: 75px;
        background-color: #62C3E9;
        margin: 0;
        margin-top: 16px;
        cursor: pointer;
      }
  
    }
  }
  
  .card--active {
    &__content {
      &__button {
        color: var(--brand-font-active) !important;
        background-color: var(--color-button-brand-active);
      }
    }
  }
  </style>