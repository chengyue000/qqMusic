<template>
  <!-- enjoyTitle -->
    <div class="enjoyTitle">
        <div class="titleCon">
            <img src="../../assets/imgs/likeImg/like-1.png" alt="">
            <span>我喜欢</span>
            <img src="../../assets/imgs/likeImg/like-2.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"musicEnjoyTitle",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* enjoyTitle */
.enjoyTitle{
    width:100%;
}
.titleCon{
    width:3.47rem;
    margin:0 auto;
    display: -webkit-flex;
    align-items: center;
    height:.45rem;
}
.titleCon img:first-child{
    width:.1rem;
    height:.18rem;
}
.titleCon span{
    font-size: .17rem;
    color:#040404;
    display: block;
    margin:0 1.28rem 0 1.31rem;
}
.titleCon img:last-child{
    width:.2rem;
    height:.04rem;
}
</style>


