<template>
    <div class="body">
        <div class="title">
            <img src="../../../../assets/imgs/chaofen.jpg" style="width: 200px;height: 200px;padding: 10px;">
            <span style="font-size: 24px;color: indianred;position: absolute;margin-top: 20px;margin-left: 20px;">
                南昌炒粉
            </span>
            <span style="width: 780px;height: 200px;line-height: 50px;font-size: 16px;position: absolute;
                margin-top: 60px;margin-left: 20px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                "这道南昌炒粉勾起我对南昌的美好回忆，那里的大街小巷都留下我的无数个脚印。
            南昌的早餐：拌粉、拌面、炒粉、粉面、炒年糕、肉饼汤。非常有特色!非常好吃!
            在南昌吃的南昌炒粉确实是放：肉丝、大蒜子、豆芽或小白菜，所以就按家里的材料就地取材，味道一样不错哦!"
            </span>
        </div>
        <hr style="width: 1000px;border-top: dotted darkgray;margin-top: 20px;">
        <div class="eat">
            <span style="font-size: 24px;color: #c90000;line-height: 50px;">
                🧾️食材明细
            </span><br>
            <span style="font-size: 18px;color: dimgrey;line-height: 50px;">
                主料：肉丝适量🥩    江西米粉适量&nbsp;&nbsp;&nbsp;&nbsp;
                辅料：盐🧂    淀粉    蒜    葱丝    青辣椒丝    红辣椒丝    老抽
            </span>
        </div>
        <hr style="width: 1000px;border-top: dotted darkgray;margin-top: 20px;">
        <div class="list">
            <span style="font-size: 24px;color: #c90000;line-height: 50px;">
                🥢南昌炒粉的做法步骤
            </span><br>
            <ul class="list-ul">
                <li class="list-li">
                    <img src="../../../../assets/imgs/cf1.jpg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;">
                        1.肉丝....
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/cf2.jpg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        2.爆好肉丝备用(肉丝用盐、淀粉抓抓放几瓣蒜一起爆)。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/cf3.jpg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        3.葱丝、青红椒丝。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/cf4.jpg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        4.热锅先下葱丝煸香。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/cf5.jpg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        5.再下青红辣椒丝、煮好的江西米粉不停翻炒。
                    </span>
                </li>
                <li class="list-li">
                    <img src="../../../../assets/imgs/cf6.jpg" style="width: 220px;height: 165px;">
                    <span style="font-size: 16px;line-height: 50px;position: absolute;margin: 60px 0 0 30px;width: 700px;">
                        6.加少许盐、老抽(想要颜色更好看多放点，南昌炒粉就是色泽较深)翻炒均匀即可。
                    </span>
                </li>
            </ul>
        </div>
        <hr style="width: 1000px;border-top: dotted darkgray;margin-top: 20px;">
        <div class="eat">
            <span style="font-size: 24px;color: #c90000;line-height: 50px;">
                🌟小窍门
            </span><br>
            <span style="font-size: 18px;color: dimgrey;line-height: 50px;margin-left: 30px;">
                煮粉要注意，切勿过熟，不然就炒的很碎。
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chaofen"
    }
</script>

<style scoped lang="css">
    .body{
        width: 1080px;
        height: 1820px;
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