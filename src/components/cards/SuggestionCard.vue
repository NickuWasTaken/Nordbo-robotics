<template>
    <section class="card">
      <div class="card__image">
        <img :src="`/images/${productImage}.png`" alt="" />
      </div>
      <div class="card__content">
        <h4 class="card__content__heading">{{ data.productName }}</h4>
        <p class="card__content__describtion">{{ data.productDesc }}</p>
        <BaseButton @checkedButton="selectSolution(data.id)" />
  
      </div>
    </section>
    <RouterView />
    <teleport to='body'>
      <SelectionModal v-if="productSelected" :categoryType="modalData[0].productType"
        :product-image="modalData[0].productType" :product-name="modalData[0].productType"
        :product-details="modalData[0].productType" @closeModal="closeSolution" />
    </teleport>
  </template>
  
  <script setup>
  import { RouterView } from 'vue-router'
  import { ref, reactive } from 'vue'
  import BaseButton from '@/components/BaseButton.vue'
  import SelectionModal from '@/components/TheModal.vue'
  const productImage = ref(data.productImage)
  
  const data = defineProps({
    id: {
      type: Number,
      default: 1
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
    },
    productType: {
      type: String,
      default: 'testing'
    }
  })
  
  let suggestedSolutions = reactive([
    {
      "id": 1,
      "productName": 'Mimic URCap',
      "productImage": 'Mimic_UR_cap',
      "productDesc": 'Spray painting, Powdercoating, Sandblasting, Dispensing (e.g., glueing)',
      "productType": 'testing1'
    },
    {
      "id": 2,
      "productName": 'Mimic URCap',
      "productImage": 'Mimic_UR_cap',
      "productDesc": 'Spray painting, Powdercoating, Sandblasting, Dispensing (e.g., glueing)',
      "productType": 'testing2'
    },
    {
      "id": 3,
      "productName": 'Mimic URCap',
      "productImage": 'Mimic_UR_cap',
      "productDesc": 'Spray painting, Powdercoating, Sandblasting, Dispensing (e.g., glueing)',
      "productType": 'testing3'
    }]);
  
  let modalData = reactive([
    {
      "id": 1,
      "productName": 'Mimic URCap',
      "productImage": 'Mimic_UR_cap',
      "productDesc": 'Spray painting, Powdercoating, Sandblasting, Dispensing (e.g., glueing)',
      "productType": 'testing'
    }
  ])
  
  console.log(modalData[0])
  
  let productSelected = ref(false);
  
  const selectSolution = (productId) => {
    modalData[0] = suggestedSolutions[productId - 1]
    productSelected.value = true;
    console.log(productSelected.value)
  }
  
  const closeSolution = () => {
    productSelected.value = false;
    let radios = document.getElementsByTagName('input');
    for (let i = 0; i < radios.length; i++)
      radios[i].checked = false;
    console.log(productSelected.value)
  }
  
  
  
  
  </script>
  
  <style lang="scss" scoped>
  .card {
    margin-top: 200px;
    height: 650px;
    width: 390px;
    border-radius: 10px;
    border: 1px solid var(--color-background-soft);
  
    &__image {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px 40px;
      height: 460px;
      background: var(--color-background-soft);
    }
  
    &__content {
      padding: 0 16px;
  
      &__describtion {
        margin-bottom: 8px;
      }
  
    }
  
  }
  </style>