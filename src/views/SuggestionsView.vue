<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue'
import SuggestionCard from '@/components/cards/SuggestionCard.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
import { RobotStore } from '@/stores/RobotData.js';
import { StateManager } from '@/stores/StateManager.js'

const SavedStates = StateManager();

const robotStore = RobotStore();

await robotStore.fetchRobotData();

var productData = reactive(robotStore.dataObj);

console.log(SavedStates.currentPage)

</script>

<template nativeOnScroll="centerModal">
    <StepByStep :progress="SavedStates.currentPage" />
    <HeadlineHeader>Suggestions</HeadlineHeader>
    <div class="wrapper">
            <SuggestionCard v-for="product in productData" :product-data="product" :key="product.id"/>
    </div>
</template>

<style scoped>
.wrapper {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 160px;
}
</style>

   