<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CategoryCard from '@/components/cards/CategoryCard.vue'
import RobotInformation from '@/components/UI/RobotInformation.vue'
import RobotInformationCard from '@/components/cards/RobotInformationCard.vue'
</script>

<template>
<button><RouterLink to="/">home</RouterLink></button>
<button><RouterLink to="/parameters">parameters</RouterLink></button>
  
<RouterView />
</template>

<style scoped>

</style>

   