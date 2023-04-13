  <script setup>
import { StateManager } from '@/stores/StateManager.js'
const SavedStates = StateManager();

// return string with router link based on currentview 
const previousPage = () => {
  if (SavedStates.currentView == 2){
    return '/'
  }
  if (SavedStates.currentView == 3){
    return '/parameters'
  }
  if (SavedStates.currentView == 4){
    return '/suggestions'
  } else {
    return '/'
  }
}
  </script>

<template>
  <div class="header-push">
    <header class="header">
      <div class="header__back-button" v-if="SavedStates.currentView == 1"></div>
      <router-link :to="previousPage()" v-if="SavedStates.currentView !== 1">
      <div class="header__back-button" :class="{'header__back-button--active': SavedStates.currentView !== 1}">
        <img src="@/assets/icons/arrow.png" alt="" />
        <p>Back</p>
      </div>
    </router-link>
      <img src="@/assets/logo.svg" alt="" class="header__logo">
      <caption>Application tool 1.0</caption>
    </header>
    </div>
  </template>
  

  
  <style lang="scss" scoped>
  .header-push{
    margin-bottom: 90px;
  }
  .header {
    top: 0;
    z-index: 98;
    background-color: #fff;
    margin-bottom: 40px;
    position: fixed;
    width: 100%;
    border-bottom: 2px solid var(--color-background-soft);
    padding: 10px 40px 30px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

    > *{
      width: 209px;
    }
  
  &__back-button {
    grid-area: a;
      display: flex;
      opacity: 0;
      align-items: center;
  
      img {
        height: 15px;
        display: inline-block;
        grid-area: b;
      }
  
      p {
        grid-area: c;
        margin-left: 16px;
        display: inline-block;
        color: var(--color-text-soft);
      }
  
    }
  
    &__back-button--active {
      opacity: 1;
    }
  
      &__logo {
      display: block;
      }
    }
  </style>