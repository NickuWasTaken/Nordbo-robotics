<script setup>
import BaseButton from '@/components/UI/BaseButton.vue'


const props = defineProps( { 
   parameterFeature: {},

})

console.log(props.parameterFeature)
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
        background: #FFFFFF;
        border-radius: 12px;
        margin-bottom: 20px;
    
    &__header{
        // width: 162px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        text-transform: capitalize;
        color: #000000;
        margin: 16px 0;
    }
    &__description{
        margin: 16px  0;
        width: 558px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #000000;
        padding-bottom: 16px;
        height: 80px;
        
    }

 }
    
}






</style>