<template>
<!-- featuresRank -->
<div class="featuresRank">
    <div class="featuresTitle">
        <img src="../../assets/imgs/RankListImg/heitiao.png" alt="">
        <h2>特色榜</h2>
    </div>
    <div class="featuresCon">
        <a href="javascript:;"><img src="../../assets/imgs/RankListImg/dianyin.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/RankListImg/dianyin.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/RankListImg/dianyin.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/RankListImg/dianyin.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/RankListImg/dianyin.png" alt=""></a>
    </div>
</div>
</template>
<script>
export default {
    name:"featuresRank",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* featuresRank */
.featuresRank{
    width:100%;
}
.featuresTitle{
    display: -webkit-flex;
    -webkit-align-items:center;
}
.featuresTitle img{
    width:.12rem;
    height:.06rem;
    margin-right:.08rem;
}
.featuresTitle h2{
    font-size:.15rem;
    line-height: .27rem;
    margin-top:.17rem;
}
.featuresCon{
    width:3.48rem;
    margin:0 auto;
    display:-webkit-flex;
    /* justify-content: space-around; */
    flex-wrap:wrap;
}
.featuresCon a img{
    width:1.09rem;
    height:1.09rem;
    margin-right: .1rem;
    margin-bottom: .08rem;
}
.featuresCon a:nth-child(3n) img{
    margin-right: 0;
}

</style>


