<script setup>
import BaseButton from '@/components/UI/BaseButton.vue'
import NextButton from '@/components/UI/NextButton.vue'
import data from '@/assets/data/categories.json'

import {categoryStore} from '@/stores/data.js'

import { ref, computed, reactive, onMounted } from 'vue'
import axios from 'axios'

const test = categoryStore()

const axiosResponse = await axios.get('https://nordbo-6be70-default-rtdb.europe-west1.firebasedatabase.app/.json')


onMounted(() => {
    test.fetchUsers();
});

console.log(axiosResponse.data)

var products = reactive(test.dataObj)
console.log(data)

let active = ref(false)

const scrollBottom = () => {
          let bottom = document.body.scrollHeight;
          window.scrollTo(0, bottom);
        }

const setActiveCard = (id) => {
  let i = 0
  while(products[i]){
    products[i].active = false
    i++
  }
  products[id].active = !products[id].active
//   console.log(products[id].active);
//   console.log(id)
}


const search = ref("")
const searchFunction = computed(() => {
      return products.filter((item) => {
        return item.name.toLowerCase().includes(search.value);
      });
    });


</script>

<template>

<div class="container">
    <h3 class="container__header">Choose Application </h3>
    <p class="container__text">When choosing the right Application for a collaborative robot, it is important to consider the specific needs and requirements of the production environment.</p>
    <div class="searchbar">
        <div class="search-icon"></div>
        <input v-model="search"  type="text" id="robots" name="search" placeholder="Search..." maxlength="15" >
    </div>
</div>

    <div class="wrapper" >
    <!-- <div class="card" v-for="product in products" :key="product.id"  > -->
    <div class="card" v-for="product in searchFunction" :key="product.id"  >
        <div class="card__name"  >{{ product.name }}</div>
        <div class="card__text"  > {{ product.description }} </div>
        <div @click="scrollBottom()"><BaseButton @CheckedButton=" setActiveCard(product.id-1), active = true" /></div>
        
        <div class="checked" v-show="product.active" ></div>
        <div class="card__image">
            <div class="card__triangle"></div>
            <div class="card__triangle-overlay" v-if="product.active"></div>
            <img :src="product.image" alt="">
        </div>
    </div>
    </div>
    <RouterLink to="parameters"><NextButton  @check="active" v-if="active"/></RouterLink>

</template>

<style lang="scss" scoped>



.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1700px;
  margin: auto;
  .checked{
    z-index: 6;
    position: absolute;
    top:112px;
    left: 394px;
    height: 85px;
    width: 85px;
    background: url("@/assets/icons/checkmark-card.png");
    background-size: cover;
    border-radius: 100%;
    background-color: white;
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
        z-index: 5;
        position: absolute;
        width: 300px;
        height: 308px;
        left: 0px;
        top: 0px;
        border-bottom: 308px solid rgba(98, 195, 233, 0.5);;
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
    
}

  .card:hover .card__triangle{ 
    border-bottom: 308px solid rgba(98, 195, 233, 0.25);

    }
 
 .container{ 
    margin:auto;
    max-width: 1200px;
    &__header{
    width: 590px;
    height: 44px;
    font-family: 'Roboto';
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 1.2px;
    color: #02112E;
    margin-bottom: 0;
    }
    &__text{
    margin-top: 16px;
   
    width: 566px;
    height: 72px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    }
    .searchbar{
        display: flex;
        border:none;
        padding: 16px 32px;
        gap: 25px;
        width: 460px;
        height: 56px;
        background: #F5F5F5;
        border-radius: 200px;
        margin: 80px 0;
        margin-left: -10px;
        input{
            border:none;
            background: #F5F5F5;
            font-family: 'Roboto';
            font-size: 18px;
            color: #8E98A8;
            outline: 0;
            width: 420px; 
        }
        .search-icon{
            width: 19px;
            height: 19px;
            background-image: url("@/assets/icons/magnifying-glass.png");
            background-size: contain;
            background-repeat: no-repeat;
            margin:auto;

        }
    }
}


  
</style>