<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { StateManager } from '@/stores/StateManager.js'
/*
Kald: 
        <Thesolution 
        categoryType="" 
        productImage="" 
        productName="" 
        productDetails=""
        /> 
*/


const SavedStates = StateManager();
const productImage = ref(SavedStates.selectedSolution.image)

const resetStateManager = () => {
    SavedStates.$reset()
}


</script>

<template>
    <div class="wrap">
        <section class="solution">
            <aside class="solution__product">
                <img :src="`/images/${productImage}.png`" />
            </aside>
            <main class="solution__info">
                <div class="solution__info__wrap">
                    <div class="solution__info__product">
                        <caption>
                            {{ SavedStates.selectedCategoryName }}
                        </caption>
                        <h1>{{ SavedStates.selectedSolution.name }}</h1>
                        <p>{{ SavedStates.selectedSolution.desc }}</p>
                    </div>
                </div>
            </main>
        </section>
        <div class="last-steps">
            <RouterLink to="/">
                <div class="last-steps__restart" @click="resetStateManager()">
                    <p>Start over</p>
                    <img src="@/assets/icons/blue-return.png" class="last-steps__icon" alt="">
                </div>
            </RouterLink>
            <a class="last-steps__save-pdf" @click="MakePDFWithSuggestedSolution()">Choose solution <img
                    src="@/assets/icons/pdf-icon.png" class="last-steps__icon" alt=""></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;

    .solution {
        z-index: 99;
        width: 1000px;
        height: 520px;
        border-radius: 15px;
        background: #fff;
        border: var(--color-background-soft) solid 1px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        box-shadow: 2px 6px 37px -6px rgba(0, 0, 0, 0.08);

        &__product {
            width: 380px;
            padding: 64px;
            height: inherit;
            background: linear-gradient(180deg,
                    rgba(98, 195, 233, 0.5) 0%,
                    rgba(98, 195, 233, 0) 100%);
            border-radius: 14px 0 0 14px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                max-width: 100%;
            }
        }

        &__info__wrap {
            height: 100%;
        }

        &__info {
            height: inherit;
            padding: 125px 120px 125px 64px;

            &__product {
                height: inherit;

                h1,
                h2 {
                    margin: 0;
                    text-transform: uppercase;
                    line-height: 1;
                    text-align: left;
                    padding-top: 0;
                }

                caption {
                    color: var(--inactive-default);
                }

                p {
                    height: 85%;
                    overflow-y: auto;
                    padding-bottom: 20px;
                    padding-right: 10px;
                }

                ::-webkit-scrollbar {
                    width: 6px;
                }

                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                ::-webkit-scrollbar-thumb {
                    background: #888;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            }
        }
    }

    .last-steps {
        margin-top: 30px;
        align-items: center;
        padding-left: 700px;
        display: flex;

        &__restart {
            display: flex;
            align-items: center;
            margin-right: 25px;
        }

        &__save-pdf {
            background-color: var(--color-button-brand-default);
            padding: 16px 32px;
            border-radius: 32px;
            margin-right: 32px;
            display: flex;
            align-items: center;

        }

        &__icon {
            height: 20px;
            margin-left: 10px;
        }
    }
}
</style>
