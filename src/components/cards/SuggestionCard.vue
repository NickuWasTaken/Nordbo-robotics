<template>
    <section class="card">
        <div class="card__image">
            <img :src="`/images/${productImage}.png`" alt="" />
        </div>
        <div class="card__content">
            <h4 class="card__content__heading">{{ props.productData.name }}</h4>
            <p class="card__content__describtion">{{ props.productData.desc }}</p>
            <BaseButton @checkedButton=" selectSolution(), centerModal()" />
        </div>
    </section>

    <teleport to='body'>
        <SelectionModal v-if="productSelected" :categoryType="props.productData.productType"
            :productDetails="props.productData.desc" :productImage="props.productData.image"
            :productName="props.productData.name" :productPros="props.productData.pros"
            :productCons="props.productData.cons"
            :selectedProduct="productData"
             @closeModal="closeSolution"
             @updateSolution="updateSolution()"
           />
           
    </teleport>
    
</template>
  
<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import SelectionModal from '@/components/UI/SelectionModal.vue'
import { StateManager } from '@/stores/StateManager.js'

const updateStep = () => {
	SavedStates.$patch({
		currentPage: 4,
	})
}

const SavedStates = StateManager();
const updateSolution = () => {
    SavedStates.$patch({
        selectedSolution: props.productData
    })
    updateStep()
    console.log(SavedStates.selectedSolution)
}

const productImage = ref(props.productData.image)

const props = defineProps({
    productData: {}
})

let productSelected = ref(false);

const centerModal = async () => {
    setTimeout(
        document.getElementById('modal-wrap').style.top = window.scrollY+'px', 50
    )
    
}

const selectSolution = async () => {
    productSelected.value = false;
    productSelected.value = true;
    await updateSolution()
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

        img{
            width: 100%;
        }
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