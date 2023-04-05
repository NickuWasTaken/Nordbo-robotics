<script setup>
import BaseButton from '@/components/UI/BaseButton.vue'

</script>




<template>
<div class="wrapper">
    <div class="card-volume">
        <h3 class="card-volume__header">High Volume</h3>
        <p class="card-volume__description">Collaborative robots are designed to perform a wide range of tasks in various industries, including manufacturing, healthcare, and logistics and many more </p>
        <BaseButton @CheckedButton="$emit('checkedButton')"/>
    </div>
    <div class="card-volume">
        <h3 class="card-volume__header">High Volume</h3>
        <p class="card-volume__description">Collaborative robots are designed to perform a wide range of tasks in various industries, including manufacturing, healthcare, and logistics and many more </p>
        <BaseButton @CheckedButton="$emit('checkedButton')"/>
    </div>

</div>


</template>





<style lang="scss" scoped>

.wrapper{
    display: flex;
    gap:20px;
    width: 1200px;
    .card-volume{
        border: 1px solid rgba(0, 0, 0, 0.08);
        filter: drop-shadow(2px 6px 16px rgba(0, 0, 0, 0.08));
        height: 226px;
        padding: 0 16px;
        width: 590px;
        background: #FFFFFF;
        border-radius: 12px;
        margin:auto;
    
    &__header{
        width: 162px;
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
        
    }
 }
    
}






</style>