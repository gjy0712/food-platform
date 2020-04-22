<template>
    <div class="bg">
        <img class="bg-blur" src="../assets/imgs/login.jpeg" style="width: 1664px;height: 960px; text-align: center;">
        <span class="content-font">南昌美食</span>
        <div class="form">
            <form class="form1" id="form1" action="/user/register" method="post">
                <label>用户名：</label>
                <input id="name" name="name" class="input1" type="text">
                <br/>
                <label class="ls">密&nbsp;&nbsp;码：</label>
                <input id="password" name="password" class="input1" type="password">
                <br/>
                <label class="ls1">确认密码：</label>
                <input id="secPassword" name="secPassword" class="input1" type="password">
                <br/>
                <input id="login1" class="input2"  type="button" value="注册" @click="register()">&nbsp;
                <input id="login2" class="input2"  type="button" value="返回" @click="doUserLogin()">
            </form>
        </div>

    </div>
</template>

<script>
    export default {
        name: "register",
        methods: {
            register() {

            },
            doUserLogin() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .bg {
        height: 960px;
        text-align: center;
        line-height: 960px;
        letter-spacing: 15px;
    }
    .bg-blur{
        background-repeat: no-repeat;
        filter: blur(8px);
        z-index: 1;
    }
    .content-font {
        color: white;
        font-family: cursive;
        font-size: 70px;
        position: absolute;
        left: 10px;
        right: 10px;
        text-align: center;
        margin-top: -260px;
        z-index: 10;
    }
    .form {
        width: 420px;
        height: 380px;
        line-height: 80px;
        position: absolute;
        margin-top: -1120px;
        margin-left: 620px;
        background-color: rgba(200,200,200,0.2);
        z-index: 999;
        border-radius: 15px;
    }
    .form1 {
        width: 380px;
        height: 380px;
        text-align: left;
        font-size: 25px;
        margin-left: 25px;
        margin-top: 20px;

    }
    .input1 {
        height: 20px;
        width: 180px;
        border-radius: 10px;
    }
    .input2 {
        background: #EE872A;
        height: 35px;
        width: 160px;
        font-size: 16px;
        border-radius: 10px;
    }
    .input3 {
        background: #EE872A;
        height: 40px;
        width: 366px;
        font-size: 16px;
        border-radius: 10px;
    }
    .ls {
        letter-spacing: 13.5px;
    }
    .ls1{
        letter-spacing: 7px;
    }
</style>