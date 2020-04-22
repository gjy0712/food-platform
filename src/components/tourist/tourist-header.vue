<template>
    <div class="head">
        <div class="logo">
            <img src="../../assets/imgs/logo.png" style="width: 275px;height: 250px;">
        </div>
        <div class="nav">
            <ul class="ul1">
                <li class="li2 li1"><router-link to="/index">首页</router-link></li>
                <li class="li2"><router-link to="/specialSnack">特色小吃</router-link></li>
                <li class="li2"><router-link to="/recommend">推荐餐馆</router-link></li>
                <li class="li2"><router-link to="/specialty">特产</router-link></li>
                <li class="li2"><router-link to="/menu">菜谱</router-link></li>
            </ul>
        </div>
        <!--<div class="search">
            <input type="text" id="search" placeholder="Search your favorite food">
        </div>-->
        <div style="display: inline-block;float: right; margin-top: 40px; margin-right: 10px;">
<!--            欢迎用户：{{name}}！！-->
            <button onclick="doLogin()">登录</button>  |  <button onclick="doRegister()">注册</button>
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

</style>