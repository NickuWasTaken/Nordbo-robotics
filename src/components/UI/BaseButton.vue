<script setup>

defineEmits(['checkedButton'])

let random = Math.floor(Math.random() * 1000000);

</script>

<template>

    <input  type="radio" :id="random" name="check" >
    <label :for="random" @click="() => $emit('checkedButton')"></label>


</template>


<style lang="scss" scoped>
  
label {
      padding: 16px 40px;
      gap: 10px;
      font-family: var(--nr-font-default);
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--nr-font-color-default);
      min-width: 133px;
      height: 56px;
      border: none;
      background-color: var(--nr-brand-bluemana-500);
      border-radius: 77px;
      cursor: pointer;
    }
    label:after{
      content:"Select";
      
    }
   input[type="radio"] {
      display: none;
    }
    input[type="radio"]:checked+label {
      background-color: var(--nr-brand-spanishblue-500);
      color:var(--nr-white);
      width: 150px;
    }
    input[type="radio"]:checked+label:after {
      content:"Selected";
      background-color: var(--nr-brand-spanishblue-500);
      color:var(--nr-white);
      width: 150px;
    }






</style>