<template>
    <div>
        <ul class="steps">
            <li class="steps__step" :class="{'steps__step--inactive' : props.progress < 1}">
                <div class="steps__step__circle" :class="{'steps__step__circle--active' : props.progress == 1 , 'steps__step__circle--completed' : props.progress > 1 }">
                    <p v-if="props.progress <= 1">1</p>
                </div>
                <p>Application</p>
                <hr v-if="props.progress > 1">
            </li>
            <li class="steps__step" :class="{'steps__step--inactive' : props.progress < 2}">
                <div class="steps__step__circle" :class="{'steps__step__circle--active' : props.progress == 2 , 'steps__step__circle--completed' : props.progress > 2 }">
                    <p v-if="props.progress <= 2">2</p>
                </div>
                <p>Parameters</p>
                <hr v-if="props.progress > 2">
            </li>
            <li class="steps__step" :class="{'steps__step--inactive' : props.progress < 3}">
                <div class="steps__step__circle" :class="{'steps__step__circle--active' : props.progress == 3, 'steps__step__circle--completed' : props.progress > 3 }">
                    <p v-if="props.progress <= 3">3</p>
                </div>
                <p>Suggestion</p>
                <hr v-if="props.progress > 3">
            </li>
            <li class="steps__step" :class="{'steps__step--inactive' : props.progress < 4}">
                <div class="steps__step__circle" :class="{'steps__step__circle--active' : props.progress == 4 , 'steps__step__circle--completed' : props.progress > 4 }">
                    <p v-if="props.progress <= 4">4</p>
                </div>
                <p>Solution</p>
            </li>

        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['progress']) 
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

        hr{
            z-index: 1;
            position: absolute;
            width: 130px;
            margin-top: 17px;
            margin-left: 110px;
            height: 0;
            border: none;
            border-bottom: 2px solid var(--color-button-brand-default);
        }

        > p{
            margin: 0;
            margin-top: 16px;
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

        > p {
            color: var(--inactive-default);
        }
    }
}
</style>