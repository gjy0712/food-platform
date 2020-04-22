<template>
    <div>
        <food-header></food-header>
        <div class="food-content-box">
            <div class="food-content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import FoodHeader from "./food-header";
    export default {
        name: "food-main",
        components: {FoodHeader}
    }
</script>

<style lang="css">
    .food-content-box {
        position: absolute;
        left: 0;
        right: 0;
        top: 200px;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #fff;
    }
    .food-content {
        width: auto;
        height: 100%;
        padding: 10px;
        overflow-y: hidden;
        overflow-x: hidden;
        box-sizing: border-box;
    }
</style>