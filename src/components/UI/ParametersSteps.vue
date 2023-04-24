<template>
    <ul>
        <li><img src="@/assets/icons/blue-dot.png"> <p> Select the preferred industry for the application</p> </li>
        <li><img src="@/assets/icons/blue-dot.png"> <p>Choose the preferred production type</p>  </li>
        <li><img src="@/assets/icons/blue-dot.png"> <p>Select the preferred precision</p> </li>
    </ul>
</template>


<style lang="scss" scoped>
ul{
    list-style: none;
    width: 500px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 75px;
    li{
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        img{
            height: 13px;
            width: 13px;
            margin-right: 20px;
        }
        p{
            margin: 0;
        }
    }
}
</style>