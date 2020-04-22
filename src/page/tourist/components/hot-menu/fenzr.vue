<template>
    <div class="body">
        <div class="title">
            <img src="../../../../assets/imgs/fenzr.png" style="width: 200px;height: 200px;padding: 10px;">
            <span style="font-size: 24px;color: indianred;position: absolute;margin-top: 20px;margin-left: 20px;">
                粉蒸肉
            </span>
            <span style="width: 780px;height: 200px;line-height: 50px;font-size: 16px;position: absolute;
                margin-top: 60px;margin-left: 20px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                "这绝对是一道超级简单的新手宴客菜。但是味道嘛，地球人都知道，粉蒸肉是多么滴好吃。瘦肉不柴，肥肉不腻。
                一口咬下去很满足的感觉。让惧怕肥肉又经常很馋的同学，得到了双面满足。"
            </span>
        </div>
        <hr style="width: 1000px;border-top: dotted darkgray;margin-top: 20px;">
        <div class="eat">
            <span style="font-size: 24px;color: #c90000;line-height: 50px;">
                🧾️食材明细
            </span><br>
            <span style="font-size: 18px;color: dimgrey;line-height: 50px;">
                主料：五花肉500g🥩    五香蒸肉粉100g&nbsp;&nbsp;&nbsp;&nbsp;
                辅料：香葱5根    姜1块&nbsp;&nbsp;&nbsp;&nbsp;
                配料：蒸鱼豉油一汤匙    白糖一勺    鸡汁一勺
            </span>
        </div>
        <hr style="width: 1000px;border-top: dotted darkgray;margin-top: 20px;">
        <div class="list">
            <span style="font-size: 24px;color: #c90000;line-height: 50px;">
                🥢家常粉蒸肉的做法步骤
            </span><br>
            <ul class="list-ul">
                <li class="list-li">
                    <img src="../../../../assets/imgs/fzr1.jpeg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;">
                        1.原料图如图
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/fzr2.jpeg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 30px 0 0 30px;width: 700px;">
                        2.五花肉冻两三个小时后，切薄片。和葱末姜末混合。（肉片当然越薄越好，冻的原因就是比较好切，要是自己刀工很棒，就别冻了）
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/fzr3.jpeg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        3.加入一汤匙蒸鱼豉油，一茶匙白糖，一茶匙鸡汁，一茶匙使用色拉油腌渍十分钟。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/fzr4.jpeg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        4.拌上蒸肉粉，抓匀。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/fzr5.jpeg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        5.码放在碗里，上锅蒸30——40分钟。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/fzr6.jpeg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        6.倒扣在盘中即可。
                    </span>
                </li>
            </ul>
        </div>
        <hr style="width: 1000px;border-top: dotted darkgray;margin-top: 20px;">
        <div class="eat">
            <span style="font-size: 24px;color: #c90000;line-height: 50px;">
                小窍门
            </span><br/>
            <span style="font-size: 18px;color: dimgrey;line-height: 50px;margin-left: 30px;">
                1.腌渍一下的目的是更入味，颜色也不会白生生的。看起来要好看点。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                2.中火蒸就可以了，水要加够，别烧干了。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                3.用高压锅应该更快的。
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fenzr"
    }
</script>

<style scoped lang="css">
    .body{
        width: 1080px;
        height: 1900px;
        margin-top: 30px;
        margin-left: 300px;
        border: 2px solid;
    }
    .title{
        width: 1080px;
        height: 220px;
        margin-top: 20px;
        margin-left: 35px;
    }
    .eat{
        width: 1000px;
        height: 100px;
        margin-left: 40px;
    }
    .list{
        width: 1000px;
        height: 1260px;
        margin-left: 40px;
    }
    .list-ul{
        list-style: none;
        width: 1000px;
        height: 1000px;
        margin-top: 20px;
    }
    .list-li{
        width: 980px;
        height: 200px;
        display: block;
        margin-left: 30px;
    }
</style>