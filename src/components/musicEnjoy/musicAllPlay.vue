<template>
 <!-- allPlay -->
    <div class="allPlay">
        <div class="play_left">
            <span class="iconfont icon-bofang"></span>
            <p>全部播放</p>
        </div>
        <div class="play_right">
            <span class="iconfont icon-xiazai"></span>
            <img src="../../assets/imgs/likeImg/gengduo.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"musicAllPlay",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* allPlay */
.allPlay{
    width:100%;
    display: -webkit-flex;
    align-items: center;
    height:.54rem;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
}
.play_left,.play_right {
    display: -webkit-flex;
    align-items: center;
}
.play_left span{
    font-size:.23rem;
    color:#62bf82;
    font-weight: 600;
    margin-left: .13rem;
    margin-right: .14rem;
}
.play_left p{
    font-size:.15rem;
}
.play_right span{
    font-size: .19rem;
    font-weight: 600;
}
.play_right img{
    width:.17rem;
    height:.15rem;
    margin-right: .12rem;
    margin-left: .23rem;
}
</style>


