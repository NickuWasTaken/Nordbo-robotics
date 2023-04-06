<script setup>
/*
Kald: 
        <Thesolution 
        categoryType="" 
        productImage="" 
        productName="" 
        productDetails=""
        /> 
*/
import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const objPros = props.productPros;
const objCons = props.productCons;

const props = defineProps({
    categoryType: {
        type: String,
        default: 'sanding',
    },
    productImage: {
        type: String,
        default: 'Sander-1',
    },
    productName: {
        type: String,
        default: 'Mimic urcap',
    },
    productDetails: {
        type: String,
        default:
            'This robot is designed to handle complex sanding projects with precision and efficiency. With its advanced features and customizable programming options, this sanding robot is ideal for manufacturers and craftsmen looking to streamline their production processes.',
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
    <div class="wrap">
        <section class="solution">
            <aside class="solution__product">
                <img :src="`/images/${productImage}.png`" />
            </aside>
            <main class="solution__info">
                <div class="solution__info__wrap">
                    <div class="solution__info__product">
                        <caption>
                            {{ props.categoryType }}
                        </caption>
                        <h1>{{ props.productName }}</h1>
                        <p>{{ props.productDetails }}</p>
                    </div>
                </div>
            </main>
        </section>
        <div class="last-steps">
            <RouterLink to="/">
                <div class="last-steps__restart">
                    <p>Start over</p>
                    <img src="@/assets/icons/blue-return.png" class="last-steps__icon" alt="">
                </div>
            </RouterLink>
            <a class="last-steps__save-pdf">Choose solution <img src="@/assets/icons/pdf-icon.png" class="last-steps__icon"
                    alt=""></a>
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
            height: 650px;
            overflow-y: auto;
        }

        &__info {
            height: 100%;
            padding: 125px 120px 125px 64px;

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
