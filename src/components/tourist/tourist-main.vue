<template>
    <div>
        <tourist-header></tourist-header>
        <div class="tourist-content-box">
            <div class="tourist-content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import TouristHeader from "./tourist-header";
    export default {
        name: "tourist-main",
        components: {TouristHeader}
    }
</script>

<style>
    .tourist-content-box {
        position: absolute;
        left: 0;
        right: 0;
        top: 200px;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #fff;
    }
    .tourist-content {
        width: auto;
        height: 100%;
        padding: 10px;
        overflow-y: hidden;
        overflow-x: hidden;
        box-sizing: border-box;
    }
</style>