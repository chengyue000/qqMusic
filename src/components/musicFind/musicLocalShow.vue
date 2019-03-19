<template>
  <!-- localShow -->
<div class="localShow">
    <div class="showContent">
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-2.png" alt="">
            <span>本地演出</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-3.png" alt="">
            <span>Cash Ca...</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-4.png" alt="">
            <span>The Cha...</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-3.png" alt="">
            <span>Cash Ca...</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-3.png" alt="">
            <span>Cash Ca...</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-4.png" alt="">
            <span>Cash Ca...</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-3.png" alt="">
            <span>Cash Ca...</span>
        </a>
        <a href="javascript:;">
            <img src="../../assets/imgs/findImg/find-4.png" alt="">
            <span>Cash Ca...</span>
        </a>
    </div>
</div>
</template>
<script>
export default {
    name:"musicLocalShow",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* localShow */
.showContent{
    display:-webkit-flex;
    overflow-x: auto;
    border-bottom: .05rem solid #f4f4f4;
}
.showContent a{
    width:.6rem;
    height:.83rem;
    flex-shrink: 0;
    margin-right: .03rem;
}
.showContent a img{
    width:.45rem;
    height:.45rem;
    margin:0 auto;
    margin-bottom: .1rem;
    margin-top:.05rem;
}
.showContent a span{
    font-size:12px;
    color:black;
    display: block;
    text-align: center;
}
</style>


