<template>
    <div class="body">
        <div class="bd1">

            <span class="titlen">01</span><br/>
            <span class="titlew">味福记</span><br/>
            <router-link to="/recommend/weifuji">
                <img src="../../assets/imgs/weifuji.jpeg" style="width: 640px;height: 427px;margin-top: 40px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">03</span><br/>
            <span class="titlew">裕鼎鲜</span><br/>
            <router-link to="/recommend/yudingxian">
                <img src="../../assets/imgs/yudingxian.jpeg" style="width: 640px;height: 427px;margin-top: 40px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">05</span><br/>
            <span class="titlew">玖柒冰室</span><br/>
            <router-link to="/recommend/jiuqi">
                <img src="../../assets/imgs/bingshi.jpeg" style="width: 640px;height: 427px;margin-top: 30px;margin-bottom: 80px;">
                <br/>
            </router-link>

            <span class="titlen">07</span><br/>
            <span class="titlew">邻家小馆</span><br/>
            <router-link to="/recommend/linjia">
                <img src="../../assets/imgs/linjia.jpeg" style="width: 640px;height: 480px;margin-top: 30px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">09</span><br/>
            <span class="titlew">哇哦炭烧牛蛙</span><br/>
            <router-link to="/recommend/wao">
                <img src="../../assets/imgs/wao.jpeg" style="width: 640px;height: 427px;margin-top: 40px;"><br/>
            </router-link>
        </div>
        <div class="bd2">
            <span class="titlen">02</span><br/>
            <span class="titlew">伊藤静</span><br/>
            <router-link to="/recommend/yitengjing">
                <img src="../../assets/imgs/ytj2.jpeg" style="width: 640px;height: 427px;margin-top: 30px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">04</span><br/>
            <span class="titlew">泰悦澜</span><br/>
            <router-link to="/recommend/taiyl">
                <img src="../../assets/imgs/taiyuelan.jpeg" style="width: 640px;height: 427px;margin-top: 30px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">06</span><br/>
            <span class="titlew">文道留</span><br/>
            <router-link to="/recommend/wendaoliu">
                <img src="../../assets/imgs/wendaoliu.jpeg" style="width: 640px;height: 480px;margin-top: 30px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">08</span><br/>
            <span class="titlew">隐餐厅</span><br/>
            <router-link to="/recommend/yin">
                <img src="../../assets/imgs/yin.jpeg" style="width: 640px;height: 480px;margin-top: 40px;margin-bottom: 80px;">
                <br/>
            </router-link>
            <span class="titlen">10</span><br/>
            <span class="titlew">爸爸炒料</span><br/>
            <router-link to="/recommend/dad">
                <img src="../../assets/imgs/baba.jpeg" style="width: 640px;height: 427px;margin-top: 40px;"><br/>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommend"
    }
</script>

<style scoped>
    .body {
        width: 100%;
        height: 3200px;
    }
    .bd1 {
        width: 830px;
        height: 3100px;
        display: inline-block;
        text-align: center;
        margin-top: 50px;
    }
    .bd2 {
        width: 830px;
        height: 3200px;
        display: inline-block;
        float: right;
        text-align: center;
    }
    .titlen {
        font-family: "Bangla Sangam MN";
        font-size: 26px;
        color: black;
        line-height: 60px;
    }
    .titlew {
        font-family: cursive;
        font-size: 26px;
        color: black;
    }
</style>