<script setup>


</script>


<template>

    <button class="next-button"  @click="$emit('check')" >
        See parameters 
        <div class="next-button__arrow"></div>
    </button>



</template>

<style lang="scss">
.next-button{
    margin: 50px auto 120px auto;
    border:none;
    padding: 16px 40px;
    width: 240px;
    height: 56px;
    background: #62C3E9;
    border-radius: 77px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    display: flex;
    cursor: pointer;
    &__arrow{
        width: 15px;
        height: 11px;
        background-image: url("@/assets/icons/arrow-button-right.png");
        background-size: cover;
        margin: auto;
    }
}
</style>