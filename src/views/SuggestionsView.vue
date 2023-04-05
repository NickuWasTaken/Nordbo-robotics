<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SuggestionCard from '@/components/cards/SuggestionCard.vue'
import TypeCard from '@/components/cards/TypeCard.vue'
import productData from '@/assets/data.json'

</script>

<template>
    <p>Suggestions</p>
    <div class="wrapper">
        <TypeCard />
        <!-- <SuggestionCard v-for="product in productData" :product-data="product" /> -->
    </div>
</template>

<style scoped>
.wrapper {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
</style>

   