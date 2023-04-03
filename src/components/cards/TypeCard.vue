<template>
    <div id="industrial" class="card" :class="{'card--active': cardIsSelected }" >
      <div class="card__image">
        <div v-if="cardIsSelected" class="card__image__selected">
        <img src="@/assets/images/image-checkmark.png" alt="">
      </div>
      </div>
      <div class="card__content">
        <h4 class="card__content__header">Industrial</h4>
        <p class="card__content__paragraph">Industrial robot applications offer numerous benefits, such as increased
          productivity, improved quality and consistency, reduced labor costs, and enhanced workplace safety</p>
        <p class="card__content__button" @click="">Select</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    cardIsSelected: {
      type: Boolean,
      default: true
    }
  })
  const selectCard = () => {
  
    if (props.cardIsSelected) {
      document.getElementById('industrial').setAttribute('class', 'card--active')
    } else {
      document.getElementById('industrial').classList.remove('card--active')
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  
    &__image {
      border-radius: 10px 10px 0 0;
      background: url('@/assets/images/springfield.png') no-repeat center #c9d2d3;
      display: block;
      height: 460px;
      width: 590px;
  
      &__selected {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background: rgba(98, 195, 233, 0.3);
      }
    }
  
    &__content {
      background-color: #eee;
      padding: 16px;
      width: 590px;
      height: 264px;
      border-radius: 0 0 10px 10px;
  
      &__header {
        margin: 0;
        text-transform: uppercase;
      }
  
      &__paragraph {
        margin: 0;
        margin-top: 16px;
      }
  
      &__button {
        display: inline-block;
        padding: 16px 40px;
        border-radius: 75px;
        background-color: #62C3E9;
        margin: 0;
        margin-top: 16px;
        cursor: pointer;
      }
  
    }
  }
  
  .card--active {
    &__content {
      &__button {
        color: var(--brand-font-active) !important;
        background-color: var(--color-button-brand-active);
      }
    }
  }
  </style>