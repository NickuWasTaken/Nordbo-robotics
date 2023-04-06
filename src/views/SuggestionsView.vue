<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SuggestionCard from '@/components/cards/SuggestionCard.vue'
import TypeCard from '@/components/cards/TypeCard.vue'
import productData from '@/assets/data.json'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import StepByStep from '@/components/UI/StepByStep.vue'

</script>

<template>
      <StepByStep progress="3"/>
    <HeadlineHeader>Suggestions</HeadlineHeader>
    <div class="wrapper">
         <SuggestionCard v-for="product in productData" :product-data="product" />
    </div>

</template>

<style scoped>
.wrapper {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
</style>

   