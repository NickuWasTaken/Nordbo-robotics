<template>
    <div>
        <ul class="steps">
            <li class="steps__step" :class="{ 'steps__step--inactive': SavedStates.currentPage < 1 }">
                <div class="steps__step__circle"
                    :class="{ 'steps__step__circle--active': SavedStates.currentPage == 1, 'steps__step__circle--completed': SavedStates.currentPage > 1 }">
                    <p v-if="SavedStates.currentPage <= 1">1</p>
                    <RouterLink to="/" v-if="SavedStates.currentPage >= 1"> </RouterLink>
                </div>
                <p>Application</p>
                <hr v-if="SavedStates.currentPage > 1">
            </li>

            <li class="steps__step" :class="{ 'steps__step--inactive': SavedStates.currentPage < 2 }">
                <div class="steps__step__circle"
                    :class="{ 'steps__step__circle--active': SavedStates.currentPage == 2, 'steps__step__circle--completed': SavedStates.currentPage > 2 }">
                    <p v-show="SavedStates.currentPage <= 2">2</p>
                    <RouterLink to="/parameters" v-if="SavedStates.currentPage >= 2"> </RouterLink>
                </div>
                <p>Parameters</p>
                <hr v-if="SavedStates.currentPage > 2">
            </li>
            <li class="steps__step" :class="{ 'steps__step--inactive': SavedStates.currentPage < 3 }">
                    <div class="steps__step__circle"
                        :class="{ 'steps__step__circle--active': SavedStates.currentPage == 3, 'steps__step__circle--completed': SavedStates.currentPage > 3 }">
                        <p v-if="SavedStates.currentPage <= 3">3</p>
                        <RouterLink to="/suggestions" v-if="SavedStates.currentPage >= 3"> </RouterLink>
                    </div>
                <p>Suggestion</p>
                <hr v-if="SavedStates.currentPage > 3">
            </li>
            <li class="steps__step" :class="{ 'steps__step--inactive': SavedStates.currentPage < 4 }">
                <div class="steps__step__circle"
                    :class="{ 'steps__step__circle--active': SavedStates.currentPage == 4, 'steps__step__circle--completed': SavedStates.currentPage > 4 }">
                    <p v-if="SavedStates.currentPage <= 4">4</p>
                    <RouterLink to="/solution"  v-if="SavedStates.currentPage >= 4"> </RouterLink>
                </div>
                <p>Solution</p>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { StateManager } from '@/stores/StateManager.js'

const props = defineProps(['progress'])

const SavedStates = StateManager();


</script>

<style lang="scss" scoped>
.steps {
    padding: 0;
    padding-top: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    &__step {
        width: 87px;
        margin: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;

        hr {
            z-index: 1;
            position: absolute;
            width: 130px;
            margin-top: 17px;
            margin-left: 110px;
            height: 0;
            border: none;
            border-bottom: 2px solid var(--color-button-brand-default);
        }

        > p {
            margin: 0;
            margin-top: 16px;
        }

        a {
                display: inline-block;
                position: absolute;
                width: 32px !important;
                height: 32px !important;
                border-radius: 50%;
            }

        &__circle {
            z-index: 4;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            background: no-repeat center var(--color-button-brand-active);
            background-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                color: white;
                padding-top: 1px;
                line-height: .9;
            }
        }

        &__circle--active {
            background: var(--color-button-brand-default);
        }

        &__circle--completed {
            background-image: url('@/assets/icons/white-checkmark.png');
        }
    }

    &__step--inactive {
        .steps__step__circle {
            background: var(--inactive-default) !important;
        }

        >p {
            color: var(--inactive-default);
        }
    }
}
</style>