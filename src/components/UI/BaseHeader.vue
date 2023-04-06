<template>
  <div class="header-push">
    <header class="header">
      <div class="header__back-button" :class="{'header__back-button--active': stepProgress}">
        <img src="@/assets/icons/arrow.png" alt="" />
        <p>Back</p>
      </div>
      <img src="@/assets/logo.png" alt="" @click="stepProgress = !stepProgress" class="header__logo">
      <caption>Application tool 1.0</caption>
    </header>
    </div>
  </template>
  
  <script setup>
  defineProps(['stepProgress'])
  </script>
  
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