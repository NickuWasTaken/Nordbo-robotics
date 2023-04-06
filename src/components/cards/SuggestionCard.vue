<template>
    <section class="card">
        <div class="card__image">
            <img :src="`/images/${productImage}.png`" alt="" />
        </div>
        <div class="card__content">
            <h4 class="card__content__heading">{{ props.productData.productName }}</h4>
            <p class="card__content__describtion">{{ props.productData.productDesc }}</p>
            <BaseButton @checkedButton=" selectSolution(props.productData.id)" />
        </div>
    </section>
    <teleport to='body'>
        <SelectionModal v-if="productSelected" :categoryType="props.productData.productType"
            :productDetails="props.productData.productDetails" :productImage="props.productData.productImage"
            :productName="props.productData.productName" :productPros="props.productData.productPros"
            :productCons="props.productData.productCons" @closeModal="closeSolution"
           />
    </teleport>
</template>
  
<script setup>
import { RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import SelectionModal from '@/components/UI/SelectionModal.vue'

const productImage = ref(props.productData.productImage)

const props = defineProps({
    productData: {}
})

let productSelected = ref(false);

const selectSolution = (productId) => {
    productSelected.value = false;
    productSelected.value = true;
    setTimeout(() => {
        document.getElementById('modal-wrap').style.top = window.scrollY+'px'
}, 10);
    let radios = document.getElementsByTagName('input');
    for (let i = 0; i < radios.length; i++)
        radios[i].checked = false;

}

const closeSolution = () => {
    productSelected.value = false;
    let radios = document.getElementsByTagName('input');
    for (let i = 0; i < radios.length; i++)
        radios[i].checked = false;
    console.log(productSelected.value)
}
</script>
  
<style lang="scss" scoped>
.card {
    margin-top: 60px;
    height: 650px;
    width: 390px;
    border-radius: 10px;
    border: 1px solid var(--color-background-soft);

    &__image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px 40px;
        height: 460px;
        background: var(--color-background-soft);
    }

    &__content {
        padding: 0 16px;

        &__describtion {
            margin: 8px 0;
            margin-bottom: 22px;
        }

        h4 {
            margin: 0;
            margin-top: 16px;
        }
    }
}
</style>