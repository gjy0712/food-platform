<template>
    <div class="body">
        <div class="list1">
            <img src="../../assets/imgs/ncr.png" style="width: 640px;height: 390px;margin-bottom: 50px;"><br>
            <img src="../../assets/imgs/wuhanjiayou.jpeg" style="width: 640px;height: 850px;margin-top: 50px"><br>
        </div>
        <div class="list2">
            <img src="../../assets/imgs/ncjiayou.jpeg" style="width: 640px;height: 481px;margin-bottom: 60px;">
            <span style="font-size: 16px;line-height: 30px;">
                隔壁巷中永远排队的米粉店，老爷爷开的香气宜人的煎包店，慈祥婆婆开的糕点店...
            </span><br>
            <img src="../../assets/imgs/tt1.png" style="width: 487px;height: 49px; margin: 30px 0 30px 0;"><br>
            <span style="font-size: 16px;line-height: 30px;">
                这都是老南昌的模样，老店对人们的意义不在于进行时和未来时，而是过去时。在那些老店里拥有我们孩童时的回忆，是我们值得怀念的味道。
            </span><br>
            <img src="../../assets/imgs/chashao.png" style="width: 51px;height: 46px;margin: 50px 0 30px 0;"><br>
            <span style="font-size: 16px;line-height: 30px;">
                记忆中那一抹熟悉的味道🍜
            </span><br>
            <img src="../../assets/imgs/shuxiwddt.gif" style="width: 640px;height: 442px;margin-top: 30px;"><br>
        </div>
        <div class="comment">
            <br>
            <span style="font-size: 20px;font-family: Ayuthaya;color: #888888;margin: 20px;">
                Leave your valuable comments!
            </span>
            <hr style="width: 1280px;color: #dddddd;margin-top: 20px;border-top: dotted">
            <div style="width: 100%;height: available">
                <form >
                    <div style="margin: 15px 15px 15px 15px">
                        <textarea name="commentContent" id="commentContent" rows="25" cols="58" style="width: 99%">请留下您的评论</textarea>
                    </div>
                    <div style="width: 98%" >
                        <input type="button" onclick="doComment()" value="提交评论" style="float: right;background-color: cadetblue;width: 100px;height: 45px;border-radius: 7px;cursor: pointer;" >
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic",
        methods: {
            doComment() {

            }
        }
    }
</script>

<style scoped>
    .body{
        width: 100%;
        height: 2500px;
        margin-top: 30px;
    }
    .list1{
        margin-left: 180px;
        width: 640px;
        height: 1350px;
        display: inline-block;
    }
    .list2{
        width: 640px;
        height: 1350px;
        display: inline-block;
        text-align: center;
        margin-left: 40px;
    }
    .comment{
        color: #dddddd;
        width: 1320px;
        height: 530px;
        margin-top: 80px;
        margin-left: 180px;
        border: 1px solid;
        border-radius: 15px;
        box-shadow: 10px 10px 10px 10px #888888;
        /*box-shadow: h-shadow v-shadow blur spread color inset;
        (水平阴影位置 垂直阴影位置 模糊距离 阴影的尺寸 阴影颜色 将外部阴影改为内部)*/
    }
</style>