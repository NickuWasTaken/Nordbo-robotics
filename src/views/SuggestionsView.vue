<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, computed } from 'vue'
import SuggestionCard from '@/components/cards/SuggestionCard.vue'
import HeadlineHeader from '@/components/UI/HeadlineHeader.vue'
import StepByStep from '@/components/UI/StepByStep.vue'
import { RobotStore } from '@/stores/RobotData.js';
import { StateManager } from '@/stores/StateManager.js'

window.scrollTo(0, 0);

const SavedStates = StateManager();
SavedStates.$patch({
    currentView: 3,
})

const robotStore = RobotStore();

await robotStore.fetchRobotData();

var productData = reactive(robotStore.dataObj);

const pushSuggestionToPiniaArray = (productId) => {
    let data = []
    const ObjData = productId
    data.push(ObjData)
    SavedStates.$patch({
        suggestedSolution: data
    })
    setTimeout(
        console.log(SavedStates.suggestedSolution), 500
    )
}

//Loops through Robots
for (let i = 0; i < productData.length; i++) {
    console.log(productData[i].name)
    let fits = 0;
    var count = 0
    //Loops through Robots.features
    for (let n = 0; n < productData[i].features.length; n++) {
        //Loops through Pinia saved parameters
        for (let t = 0; t < SavedStates.selectedParameters.length; t++) {
            console.log('Selected Parameter' + SavedStates.selectedParameters[t].parameter)
            if (productData[i].features[n].feature === SavedStates.selectedParameters[t].feature && productData[i].features[n].parameter === SavedStates.selectedParameters[t].parameter) {
                fits++
            }

        }

    }
    console.log(productData[i].name + ' passer: ' + fits + ' af de valgte parametre')
    if (fits === SavedStates.selectedParameters.length) {
        for (let n = 0; n < productData[i].category.length; n++) {
            if (SavedStates.selectedCategory === productData[i].category[n]) {
                pushSuggestionToPiniaArray(productData[i].id)
            }
        }
    }
}


for (let i = 0; i < SavedStates.suggestedSolution.length; i++) {
    SavedStates.fetchRobotDataWithId(i, SavedStates.suggestedSolution[i] - 1)
}

const suggestedProducts = SavedStates.suggestedSolution

console.log(suggestedProducts)

const search = ref('');
const searchFunction = computed(() => {
    return productData.filter((item) => {
        return item.name.toLowerCase().includes(search.value);
    });
});

</script>

<template>
    <StepByStep :progress="SavedStates.currentPage" />
    <HeadlineHeader>Suggestions</HeadlineHeader>
    <div class="wrapper">
        <SuggestionCard v-for="suggestedProduct in suggestedProducts" :product-data="suggestedProduct"
            :key="suggestedProduct.id" />
        <!-- <SuggestionCard v-for="product in searchFunction" :product-data="product" :key="product.id"
             /> -->
    </div>
    <p>End of results.</p>
    <p>If none of the results satisfy the client need, try a new search or restart the application tool process.</p>
    <div class="container">
        <div class="searchbar">
            <div class="search-icon"></div>
            <input v-model="search" type="text" id="robots" name="search" placeholder="Search..." maxlength="15" />
        </div>
        <RouterLink to="/">
            <button>
                <a>Start over</a>
                <div class="return-icon">

                </div>
            </button>
        </RouterLink>

    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 100px;
}

p {
    text-align: center;

}

button {
    display: flex;
    border: none;
    gap: 13px;
    padding: 16px 40px;
    height: 56px;
    width: 190px;
    background: #62C3E9;
    border-radius: 77px;
    font-family: 'Roboto';
    font-size: 18px;
    line-height: 24px;

    .return-icon {
        width: 19px;
        height: 19px;
        background: url("@/assets/icons/black-return.png");
        background-size: contain;
        background-repeat: no-repeat;
        margin: auto 0;
    }
}


.container {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 100px;

    .searchbar {
        display: flex;
        border: none;
        padding: 16px 32px;
        gap: 25px;
        width: 460px;
        height: 56px;
        background: #f5f5f5;
        border-radius: 200px;



        input {
            border: none;
            background: #f5f5f5;
            font-family: 'Roboto';
            font-size: 18px;
            color: #8e98a8;
            outline: 0;
            width: 420px;
        }

        .search-icon {
            width: 19px;
            height: 19px;
            background-image: url('@/assets/icons/magnifying-glass.png');
            background-size: contain;
            background-repeat: no-repeat;
            margin: auto;

        }
    }
}
</style>

   