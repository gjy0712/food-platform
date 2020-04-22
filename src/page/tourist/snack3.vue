<template>
    <div class="body">
        <hr style="margin-top: 30px;">
        <div class="room">
            <ul class="room-ul">
                <li class="room-li"><a href="">
                    <img src="../../assets/imgs/dmz.jpg" style="width: 237px;height: 200px;
                        display: inline-block">
                    <span class="laosy">
                            大麻枣
                        </span>
                    <span class="lsy">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        南昌传统点心之一，“进口酥松、桂花香甜、营养丰富”，因其形似大枣，所以一直以来就称之为“大麻枣”。
                    后来，为了方便食用，有做成了小体积的小麻枣。大麻枣入口酥松，还有桂花香，在以前是老南昌过年时走亲访友必备物品。
                        </span>
                </a></li>
                <hr style="width: 1200px;">
                <li class="room-li"><a href="">
                    <img src="../../assets/imgs/tg.jpg" style="width: 237px;height: 200px;
                        display: inline-block">
                    <span class="laosy">
                            糖果
                        </span>
                    <span class="lsy">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        南昌的糖果可不是那个甜甜的小“糖果”，而是一种油炸的面点，造型就很像“面”字的中间那部分，
                    口感酥脆带着一点甜味，最早都是早餐吃，不过现在有些水煮店也有。
                        </span>
                </a></li>
                <hr style="width: 1200px;">
                <li class="room-li"><a href="">
                    <img src="../../assets/imgs/yzp.jpg" style="width: 237px;height: 200px;
                        display: inline-block">
                    <span class="laosy">
                            柚子皮
                        </span>
                    <span class="lsy">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            南昌的凉拌柚子皮，洗去了柚子皮的苦涩，加上各种调料，柚子皮就像海绵一样吸收了调料的味道，超级下饭。
                        </span>
                </a></li>
                <hr style="width: 1200px;">
                <li class="room-li"><a href="">
                    <img src="../../assets/imgs/shuiz.jpg" style="width: 237px;height: 200px;
                        display: inline-block">
                    <span class="laosy">
                            水煮
                        </span>
                    <span class="lsy">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        之前听过这么一个观点，为什么麻辣烫能开遍全国而水煮不能，是因为麻辣烫可以复制配方但水煮不能。
                    每一家水煮的味道都各不相同，想要完美复制似乎真的很难，而这一大锅的美味，好像也真的只有南昌才有。
                        </span>
                </a></li>
                <hr style="width: 1200px;">
            </ul>
        </div>
        <div class="center">
            <ul class="pagination">
                <li><router-link to="/tourist/specialsnack">&lt;&lt;</router-link>
                <li><router-link to="/tourist/specialSnack2">&lt;</router-link></li>
                <li><router-link to="/tourist/specialSnack">1</router-link></li>
                <li><router-link to="/tourist/specialSnack2">2</router-link>
                <li><router-link to="/tourist/specialSnack3" class="active">3</router-link>
                <li><router-link to="/tourist/specialSnack3">></router-link>
                <li><router-link to="/tourist/specialSnack3">&gt;></router-link></li>
            </ul>
        </div>
        <hr style="margin-top: 50px;">
    </div>
</template>

<script>
    export default {
        name: "snack3"
    }
</script>

<style scoped>
    .body{
        width: 100%;
        height: 1370px;
    }
    .room {
        width: 1280px;
        height: 1180px;
        margin-left: 200px;
    }
    .room-ul {
        list-style-type: none;
    }
    .room-li {
        display: block;
        width: 1200px;
        height: 240px;
        margin-left: 40px;
        margin-top: 40px;
    }
    .room-li a{
        text-decoration: none;
    }
    .laosy {
        color: darkslategray;
        font-size: 26px;
        font-family: cursive;
        position: absolute;
        margin-left: 10px;
    }
    .lsy{
        color: dimgrey;
        font-size: 18px;
        font-family: cursive;
        position: absolute;
        width: 880px;
        height: 240px;
        line-height: 40px;
        margin-left: 30px;
        margin-top: 50px;
    }
    ul.pagination {
        display: inline-block;
        padding: 0;
        margin: 0;
    }
    ul.pagination li {
        display: inline;
    }
    ul.pagination li a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color 0.3s;
        border: 1px solid #ddd;
    }
    ul.pagination li a.active {
        background-color: #c90000;
        color: white;
        border: 1px solid #c90000;
    }
    ul.pagination li a:hover:not(.active) {
        background-color: #c90000;
        color: white;
    }
    div.center {
        text-align: center;
    }
</style>