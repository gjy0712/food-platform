<template>
    <div class="head">
        <div class="logo">
            <img src="../../assets/imgs/logo.png" style="width: 275px;height: 250px;">
        </div>
        <div class="nav">
            <ul class="ul1">
                <li class="li2 li1"><router-link to="/tourist/index">首页</router-link></li>
                <li class="li2"><router-link to="/tourist/specialSnack">特色小吃</router-link></li>
                <li class="li2"><router-link to="/tourist/recommend">推荐餐馆</router-link></li>
                <li class="li2"><router-link to="/tourist/specialty">特产</router-link></li>
                <li class="li2"><router-link to="/tourist/menu">菜谱</router-link></li>
            </ul>
        </div>
        <!--<div class="search">
            <input type="text" id="search" placeholder="Search your favorite food">
        </div>-->
        <div style="display: inline-block;float: right; margin-top: 40px; margin-right: 10px;">
<!--            欢迎用户：{{name}}！！-->
            <button @click="doLogin()">登录</button>  |  <button @click="doRegister()">注册</button>
            <!--<a href="userLogin.jsp">登录</a> | <a href="userRegist.jsp">注册</a>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "tourist-header",
        methods: {
            doLogin() {
                this.$router.push('/login')
            },
            doRegister() {
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped>
    .head {
        height: 180px;
        width: 100%;
        position: relative;
        border: 0;
        display: block;
    }
    .logo {
        height: 250px;
        width: 275px;
        margin-left: 80px;
        margin-top: -40px;
        display: inline-block;
        z-index: 99;
    }
    .nav {
        width: 800px;
        height: 160px;
        text-align: center;
        line-height: 160px;
        display: inline-block;
        position: absolute;
        margin-left: 60px;
        margin-top: 60px;
    }
    .ul1 {
        list-style-type: none;
        width: 800px;
        height: 160px;
        line-height: 160px;
        display: inline-block;
        overflow: hidden;
    }
    .li2 {
        width: 125px;
        height: 160px;
        display: inline-block;
        float: left;
    }
    .li2 a{
        display: block;
        text-decoration: none;
        color: black;
        line-height: 60px;
    }
    .li2 a:hover{
        background-color: #c90000;
        color: white;
    }
    .li2 .router-link-active{
        background-color: #c90000;
        color: white;
    }
    .li2 a:hover:not(.li1){
        background-color: #c90000;
        color: white;
    }
    .li1 a{
        line-height: 60px;
    }
    .search a{
        text-decoration: none;font-size: 16px;
        color: black;
    }
    .search a:hover{
        text-decoration: underline;
        cursor: pointer;
        color: dimgrey;
    }
    .search {
        display: inline-block;
        border: 2px solid;
        border-radius: 2em;    /*左右边框为半圆*/
        width: 230px;
        height: 40px;
        margin-right: 200px;
        float: right;
        margin-top: 70px;
    }

    #search {
        width: 180px;
        height: 38px;
        border: none; /*取消默认的边框以设置自定义边框*/
        outline: none; /*取消浏览器默认的蓝光边框以设置自定义的输入框*/
        font-size: 16px;
        color: rgb(112, 112, 112);
        margin-left: 18px;
    }
    input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: darkgray;
        /* placeholder字体大小  */
        font-size: 16px;
    }
</style>