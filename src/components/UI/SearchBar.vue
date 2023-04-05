<script>
export default {
    
}
</script>

<template>

<div class="wrapper">
    <div class="searchbar">
        <div class="search-icon"></div>
        <input  type="text" id="searchBar" name="search" placeholder="Search..." maxlength="15" >
    </div>
</div>

  

</template>

<style lang="scss" scoped>

.wrapper{
    margin:auto;
    max-width: 1200px;
    .searchbar{
        display: flex;
        border:none;
        padding: 16px 32px;
        gap: 25px;
        width: 460px;
        height: 56px;
        background: #F5F5F5;
        border-radius: 200px;
        margin: 80px 0;
        margin-left: -10px;
        input{
            border:none;
            background: #F5F5F5;
            font-family: 'Roboto';
            font-size: 18px;
            color: #8E98A8;
            outline: 0;
            width: 420px;
        }
        .search-icon{
            width: 19px;
            height: 19px;
            background-color: pink;
            margin:auto;

        }
    }
}




    
</style>