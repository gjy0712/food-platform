<template>
    <div class="bg">
        <img class="bg-blur" src="../assets/imgs/login.jpeg" style="width: 1664px;height: 960px; text-align: center;">
        <span class="content-font">南昌美食</span>
        <div class="form">
            <form class="form1" id="form1" action="/user/register" method="post">
                <label>用户名：</label>
                <input id="name" name="name" class="input1" type="text" v-model="registerForm.name">
                <br/>
                <label class="ls">密&nbsp;&nbsp;码：</label>
                <input id="password" name="password" class="input1" type="password" v-model="registerForm.password">
                <br/>
                <label class="ls1">确认密码：</label>
                <input id="secPassword" name="secPassword" class="input1" type="password" v-model="registerForm.secPassword">
                <br/>
                <input id="login1" class="input2"  type="button" value="注册" @click="register()">&nbsp;
                <input id="login2" class="input2"  type="button" value="返回" @click="doUserLogin()">
            </form>
        </div>

    </div>
</template>

<script>
    import apiDataFilter from "../utils/apiDataFilter";

    export default {
        name: "register",
        data() {
            return {
                registerForm: {
                    name: '',
                    password: '',
                    secPassword: ''
                },
                checkData: [
                    {
                        inspect: "", // 待检测的字段
                        msg: '用户名', // 空值返回的提示
                    },
                    {
                        inspect: "", // 待检测的字段
                        msg: '密码', // 空值返回的提示
                    },
                    {
                        inspect: "", // 待检测的字段
                        msg: '确认密码', // 空值返回的提示
                    },
                ]
            }
        },
        methods: {
            // 判定是否合规
            have_empty(arr) {
                for (let key in arr) {
                    if(arr[key].inspect && arr[key].reg){ // 有值并且有规则执行验证
                        let reg = new RegExp(arr[key].reg)
                        var red_end = reg.test(arr[key].inspect)
                        if( !red_end ){
                            this.$message.warning('请输入正确的' + arr[key].msg)
                            return false
                        }
                    }else if(!arr[key].inspect){
                        this.$message.warning('请输入' + arr[key].msg)
                        return false
                    }
                }
                return true
            },
            register() {
                this.assignData();
                const end = this.have_empty(this.checkData);
                if (!end) return // 判定验证结果

                apiDataFilter.request({
                    apiPath: 'insertUser',
                    method: 'post',
                    data: {
                        username: this.registerForm.name,
                        password: this.registerForm.password,
                        checkPassword: this.registerForm.secpassword,
                    },
                    successCallback: (res) => {
                        // 成功
                        this.$message.success("注册成功，请登录！")
                        this.registerForm = {
                            name: '',
                            password: '',
                            secPassword: ''
                        }
                        this.$router.push('/login')
                    },
                    errorCallback: (err) => {
                        // 失败
                        this.$message.error(err.data.msg)
                        this.registerForm = {
                            name: '',
                            password: '',
                            secPassword: ''
                        }
                    },
                })
            },
            assignData() {//赋值
                const arrForm = [];
                for(let key in this.registerForm){
                    arrForm.push(key);
                }
                for(let i = 0;i<this.checkData.length;i++){
                    var key = arrForm[i];
                    this.checkData[i].inspect = this.registerForm[arrForm[i]];
                }
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