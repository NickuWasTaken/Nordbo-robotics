<template>
    <section class="card">
      <div class="card__image">
        <img :src="`/images/${productImage}.png`" alt="" />
      </div>
      <div class="card__content">
        <h4 class="card__content__heading">{{ props.productName }}</h4>
        <p class="card__content__describtion">{{ props.productDesc }}</p>
        <BaseButton @checkedButton="$emit('selectSolution(product.id)')"/>
      </div>
    </section>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import BaseButton from '@/components/BaseButton.vue'
  const productImage = ref(props.productImage)
  
  const props = defineProps({
    id: {
      type: Number
    },
    productName: {
      type: String,
      default: 'Mimic URCap'
    },
    productDesc: {
      type: String,
      default: 'Spray painting, Powdercoating, Sandblasting,Dispensing (e.g., glueing)'
    },
    productImage: {
      type: String,
      default: 'Mimic_UR_cap'
    }
  })
  
  
  </script>
  
  <style lang="scss" scoped>
  .card{
    margin-top: 200px;
    height: 650px;
    width: 390px;
    border-radius: 10px;
    border: 1px solid var(--color-background-soft);
  
    &__image{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px 40px;
      height: 460px;
      background: var(--color-background-soft);
    }
  
    &__content{
      padding: 0 16px;
  
      &__describtion{
        margin-bottom: 8px;
      }
  
    }
  
  }
  </style>