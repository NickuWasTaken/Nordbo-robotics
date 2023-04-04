<script setup>
import BaseButton from '@/components/UI/BaseButton.vue'

import { ref, computed, reactive,  onMounted } from 'vue'

var products = reactive([{
        "id": 1,
        "name": "Sanding",
        "image": "../src/assets/images/sandingRobot.png",
        "active": false,
    },
    {
       "id": 2,
       "name": "Grinding",
       "image": "../src/assets/images/sandingRobot.png",
        "active": false,
    }
])



const setActiveCard = (id) => {
  let i = 0
  while(products[i]){
    products[i].active = false
    i++
    
  }
  products[id].active = !products[id].active
  console.log(products[id].active);
  console.log(id)
}

</script>

<template>
<div class="wrapper">
  <div class="card" v-for="product in products" :key="product.id" >
    <div class="card__name" >{{ product.name }}</div>
    <div class="card__text"> Best choice for wood and composites – but other joysticks/handles can be used for other industries to adapt </div>

      <BaseButton @CheckedButton="setActiveCard(product.id-1)"/>
      <div class="checked" v-show="product.active"></div>

    <div class="card__image">
    
    <div class="card__triangle"></div>
    <div class="card__triangle-overlay" v-if="false"></div>
    <img :src="product.image" alt="">
  </div>
</div>
</div>





</template>

<style lang="scss" scoped>

.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.checked{
  z-index: 5;
  position: absolute;
  top:112px;
  left: 394px;
  height: 85px;
  width: 85px;
  background-color: pink;
  border-radius: 100%;
}

.card{
margin: 20px;
align-items: flex-start;
padding: 48px 0px 32px 20px;
gap: 32px;
width: 590px;
height: 308px;
background: var(--nr-grey-soft);
border-radius: 12px;


  &__name{
    width: 199px;
  height: 34px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  color: #02112E;
  margin-bottom: 10px;

  }
  &__text{
    width: 263px;
  height: 96px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(2, 17, 46, 0.5);
  margin-bottom: 34px;

  }
  &__image{
  
  padding: 10px 27px 148px 255px;
  position: absolute;
  width: 293px;
  height: 308px;
  left: 304px;
  top: 0px;
  border-radius: 0px 10px 10px 0px;
 
  }
  &__triangle{ 
  position: absolute;
  width: 300px;
  height: 308px;
  left: 0px;
  top: 0px;
  border-bottom: 308px solid #DADCE3;
    border-radius: 0px 10px 10px 0px;
  border-left: 25px solid transparent;
  z-index: 2;

    }
    &__triangle-overlay{ 
  z-index: 6;
  background-color: black;
  position: absolute;
  width: 300px;
  height: 308px;
  left: 0px;
  top: 0px;
  border-bottom: 308px solid black;
    border-radius: 0px 10px 10px 0px;
  border-left: 25px solid transparent;

    }
 }
 img{

padding: 0px;
gap: 10px;
isolation: isolate;
margin:20px;
position: absolute;
width: 240px;
height: 270px;
left: 20px;
top: 0px;
z-index: 3;


 }


  .card:hover .card__triangle{ 
    border-bottom: 308px solid blue;

    }
 

  
</style>