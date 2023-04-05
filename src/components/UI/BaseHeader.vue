<template>
    <header class="header">
      <div class="header__back-button" :class="{'header__back-button--active': stepProgress}">
        <img src="@/assets/icons/arrow.png" alt="" />
        <p>Back</p>
      </div>
      <img src="@/assets/logo.png" alt="" @click="stepProgress = !stepProgress" class="header__logo">
      <caption>Application tool 1.0</caption>
    </header>
    <hr>
  </template>
  
  <script setup>
  defineProps(['stepProgress'])
  </script>
  
  <style lang="scss" scoped>
  hr{
    width: 100%;
    height: 0;
    border: none;
    border-bottom: 2px solid var(--color-background-soft);
  }
  .header {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  &__back-button {
      display: flex;
      opacity: 0;
      align-items: center;
  
      img {
        height: 15px;
        display: inline-block;
      }
  
      p {
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