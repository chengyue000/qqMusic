<template>
  <!-- videoInfo -->
<div class="videoInfo">
    <div class="videoTop">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">视频</a>
        <a href="javascript:;">文章</a>
    </div>
    <div class="videoListOne">
        <div class="videoListPer">
            <div class="list_per_left">
                <img src="../../assets/imgs/findImg/touxiang.png" alt="">
                <span>油管搬运工</span>
                <span>分享视频</span>
            </div>
            <img src="../../assets/imgs/findImg/cuo.png" alt="">
        </div>
        <p class="p_one">萌猴Zedd Ultra Japan现场《Lost In Japan》迷失在日本~</p>
        <a href="javascript:;" class="a_one"><img src="../../assets/imgs/findImg/find-5.png" alt=""></a>
        <div class="videoListFooter">
            <span class="videoTip">演唱会</span>
            <p>
                <span>4</span>
                <img src="../../assets/imgs/findImg/find-6.png" alt="">
            </p>
            <p>
                <span>91</span>
                <img src="../../assets/imgs/findImg/find-7.png" alt="">
            </p>
            <p>
                <span></span>
                <img src="../../assets/imgs/findImg/find-8.png" alt=""> 
            </p>
        </div>
    </div>
    <div class="videoListOne">
        <div class="videoListPer">
            <div class="list_per_left">
                <img src="../../assets/imgs/findImg/touxiang.png" alt="">
                <span>油管搬运工</span>
                <span>分享视频</span>
            </div>
            <img src="../../assets/imgs/findImg/cuo.png" alt="">
        </div>
        <p class="p_one">萌猴Zedd Ultra Japan现场《Lost In Japan》迷失在日本~</p>
        <a href="javascript:;" class="a_one"><img src="../../assets/imgs/findImg/find-5.png" alt=""></a>
        <div class="videoListFooter">
            <span class="videoTip">演唱会</span>
            <p>
                <span>4</span>
                <img src="../../assets/imgs/findImg/find-6.png" alt="">
            </p>
            <p>
                <span>91</span>
                <img src="../../assets/imgs/findImg/find-7.png" alt="">
            </p>
            <p>
                <span></span>
                <img src="../../assets/imgs/findImg/find-8.png" alt=""> 
            </p>
        </div>
    </div>
    <div class="videoListTwo">
        <p><span>24小时快讯</span></p>
        <div class="flashContent">
            <div class="newsFlash">
                <img src="../../assets/imgs/findImg/find-9.png" alt="">
                <div class="newsWord">
                    <span>霉霉登ELLE封面</span>
                    <span>流行力量，大谈音乐创作</span>
                </div>
                
            </div>
            <div class="newsFlash">
                <img src="../../assets/imgs/findImg/find-9.png" alt="">
                <div class="newsWord">
                    <span>霉霉登ELLE封面</span>
                    <span>流行力量，大谈音乐创作</span>
                </div>
                
            </div>
            <div class="newsFlash">
                <img src="../../assets/imgs/findImg/find-9.png" alt="">
                <div class="newsWord">
                    <span>霉霉登ELLE封面</span>
                    <span>流行力量，大谈音乐创作</span>
                </div>
                
            </div>
            <div class="newsFlash">
                <img src="../../assets/imgs/findImg/find-9.png" alt="">
                <div class="newsWord">
                    <span>霉霉登ELLE封面</span>
                    <span>流行力量，大谈音乐创作</span>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"musicVideoInfo",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* videoInfo */
.videoInfo{
    width:100%;
}
.videoTop{
    display:-webkit-flex;
    height:.44rem;
    -webkit-align-items:center;
}
.videoTop a{
    width:.54rem;
    height:.25rem;
    border-radius: .13rem;
    display: block;
    font-size:13px;
    color:black;
    border:1px solid #e6e6e6;
    text-align: center;
    line-height: .26rem;
    margin-right:.05rem;
}
.videoTop a:nth-child(1){
    color:#62bf82;
    border:2px solid #62bf82;
    font-size:600;
    margin-left: .1rem;
}
.videoListPer{
    display:-webkit-flex;
    -webkit-align-items:center;
    height:.5rem;
    justify-content: space-between;
    
}
.videoListPer img:last-child{
    width:.18rem;
    height:.12rem;
    margin-right: .12rem;
}
.list_per_left{
    display:-webkit-flex;
    -webkit-align-items:center;
}
.list_per_left img{
    width:.31rem;
    height:.31rem;
    margin-right: .12rem;
}
.list_per_left span:nth-child(2){
    font-size:.15rem;
    color:#2a2a2a;
    margin-right: .07rem;
}
.list_per_left span:last-child{
    font-size: 12px;
    color:#666666;
}
.videoListOne{
    margin-left:.12rem;
    width:3.64rem;
    border-bottom: 1px solid #e6e6e6;
}
.videoListOne .p_one{
    font-size:.15rem;
    line-height: .23rem;
    margin-bottom: .08rem;
}
.videoListOne .a_one img{
    width:3.51rem;
    height:1.98rem;
}
.videoListFooter{
    display:-webkit-flex;
    -webkit-align-items:center;
    height:.49rem;
}
.videoListFooter .videoTip{
    font-size:12px;
    color:#181818;
    background-color:#eaeaea;
    width:.53rem;
    height:.18rem;
    display:block;
    text-align: center;
    border-radius:.09rem; 
}
.videoListFooter p{
    display:-webkit-flex;
    -webkit-align-items:center;
}
.videoListFooter p:nth-child(2){
    margin-left: 1.52rem;
    margin-right: .29rem;
}
.videoListFooter p:nth-child(3){
    margin-right: .27rem;
}
.videoListFooter p span{
    color:#666666;
    font-size:14px;
    display:block;
    margin-right: .05rem;
}
.videoListFooter p img{
    width:.16rem;
    height:.16rem;
}

.videoListTwo{
    margin-left:.12rem;
    width:3.64rem;
    border-bottom: 1px solid #e6e6e6;
}
.newsFlash{
    width:1.52rem;
    height:1.4rem;
    background:#f4f4f4;
}
.videoListTwo p{
    /* height:.35rem; */
    margin-top:.12rem;
    margin-bottom:.07rem;
}
.videoListTwo p span{
    width:.72rem;
    height:.17rem;
    display:block;
    color:white;
    background-color: black;
    font-size:12px;   
}
.flashContent{
    display:-webkit-flex;
    overflow-x: auto;
}
.newsFlash {
    margin-right:.05rem;
}
.newsFlash img{
    width:1.52rem;
    height:.9rem;
}
.newsWord{
    padding-left:.07rem;
    padding-right: .12rem;
}
.newsWord span:nth-child(1){
    font-size:14px;
    display: block;
    margin-top:.05rem;
}
.newsWord span:nth-child(2){
    font-size:12px;
    color:#616161;
    display: block;
}

</style>


