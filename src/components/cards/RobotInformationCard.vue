<script setup>
import BaseButton from '@/components/UI/BaseButton.vue'

const props = defineProps( { 
   parameterFeature: {},

})
</script>


<template>
<div class="wrapper">
    <div class="card-volume" >
        <h3 class="card-volume__header">{{ props.parameterFeature.name }}</h3>
        <p class="card-volume__description">{{props.parameterFeature.describtion}} </p>
        <BaseButton @CheckedButton="$emit('checkedButton')"/>
    </div>
</div>

</template>





<style lang="scss" scoped>

.wrapper{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    max-width: 1200px;
    .card-volume{
        border: 1px solid rgba(0, 0, 0, 0.08);
        filter: drop-shadow(2px 6px 16px rgba(0, 0, 0, 0.08));
        height: 226px;
        padding: 0 16px;
        width: 590px;
        background: var(--nr-white);
        border-radius: 12px;
        margin-bottom: 20px;
    
    &__header{
        // width: 162px;
        font-family: var(--nr-font-default);
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        text-transform: capitalize;
        color: var(--nr-font-color-default);
        margin: 16px 0;
    }
    &__description{
        margin: 16px  0;
        width: 558px;
        font-family: var(--nr-font-default);
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: var(--nr-font-color-default);
        padding-bottom: 16px;
        height: 80px;
        
    }
 }
 .card-volume--disabled{
        opacity: 0.5;
        background: var(--nr-inactive);
        filter: grayscale(1);
    }
    
}






</style>