<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import { StateManager } from '@/stores/StateManager.js'

const SavedStates = StateManager();
await SavedStates.fetchCategoryName()
/*
Kald: 
        <TheModal 
        categoryType="" 
        productImage="" 
        productName="" 
        productDetails=""
        /> 
*/

//  props for selection modal 
const props = defineProps({
    robotId :{
        type: Number,
    },
    categoryType: {
        type: String,
    },
    productImage: {
        type: String,
    },
    productName: {
        type: String,
    },
    productDetails: {
        type: String,
    },
    productPros: {
        type: Object,
    },
    productCons: {
        type: Object,
    }
});

const productImage = ref(props.productImage)

</script>

<template>
    <div class="wrap" id="modal-wrap">
        <section class="modal">
            <aside class="modal__product">
                <img :src="`/images/${productImage}.png`" />
            </aside>
            <main class="modal__info">
                <header class="modal__info__header">
                    <p class="modal__info__header__close" @click="$emit('closeModal')">
                        <img src="@/assets/icons/blue-cross.png" class="modal__info__header__close__icon" />
                        Close
                    </p>
                </header>
                <div class="modal__info__wrap">
                    <div class="modal__info__product">
                        <caption @click="updateSolution()">
                            {{ SavedStates.selectedCategoryName }}
                        </caption>
                        <h1>{{ props.productName }}</h1>
                        <p>{{ props.productDetails }}</p>
                    </div>

                    <ul class="modal__info__pros">
                        <h2>Pros</h2>
                        <li v-for="pro in props.productPros" :key="pro">
                            <div class="pro-list-icon"></div>
                            <p>{{ pro.desc }}</p>
                        </li>
                    </ul>
                    <h2>Cons</h2>
                    <ul class="modal__info__cons">
                        <li v-for="con in props.productCons" :key="con">
                            <div class="con-list-icon"></div>
                            <p>{{ con.desc }}</p>
                        </li>
                    </ul>
                </div>
                <RouterLink to="/solution"><a class="modal__info__button" @click="$emit('updateSolution') && updateStep()">Select</a></RouterLink>

            </main>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;

    .modal {

        z-index: 99;
        width: 1280px;
        height: 900px;
        border-radius: 15px;
        background: #fff;
        border: var(--color-background-soft) solid 1px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        box-shadow: 2px 6px 37px -6px rgba(0, 0, 0, 0.08);

        &__product {
            padding: 64px;
            background: linear-gradient(180deg,
                    rgba(98, 195, 233, 0.5) 0%,
                    rgba(98, 195, 233, 0) 100%);
            border-radius: 14px 0 0 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__info__wrap {
            height: 650px;
            overflow-y: auto;
            padding-right: 40px;
            margin-bottom: 30px;
        }

        &__info {
            height: 100%;
            padding: 64px;
            padding-top: 0;

            &__header {
                height: 88px;
                margin-bottom: 40px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                display: flex;
                align-items: center;
                justify-content: end;

                &__close {
                    color: #000;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    padding: 16px 0px 16px 32px;
                    margin: 0;

                    &__icon {
                        padding-right: 10px;
                        height: 20px;
                    }
                }
            }

            h1,
            h2 {
                margin: 0;
                text-transform: uppercase;
                line-height: 1;
            }

            caption {
                color: var(--inactive-default);
            }

            &__button {
                background: var(--color-button-brand-default);
                text-align: center;
                padding: 16px 0;
                color: #000;
                border-radius: 56px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            &__button:hover {
                background: var(--color-button-brand-hover);
                color: var(--brand-font-active);
            }

            &__pros,
            &__cons {
                padding-left: 0;
                list-style: none;
                margin-top: 16px;
                margin-bottom: 40px;

                h2 {
                    margin-top: 40px;
                    margin-bottom: 16px;
                }

                li {
                    padding-left: 5px;
                    display: flex;
                    align-items: center;
                }

                li p {
                    display: inline-block;
                    margin: 0;
                }
            }
        }
    }
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

.pro-list-icon,
.con-list-icon {
    display: inline-block;
    height: 24px;
    width: 20px;
    margin-right: 10px;
    background: url('@/assets/icons/green-plus.png') center no-repeat;
    background-size: 19px;
}

.con-list-icon {
    background: url('@/assets/icons/red-minus.png') center no-repeat;
    background-size: 19px;
}
</style>
