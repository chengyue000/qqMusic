<template>
<!-- musicRankTitle   -->
<div class="musicRankTitle">
    <!-- <img src="../../assets/imgs/RankListImg/fanhui.png" alt=""> -->
    <router-link to="/musicHall"><img src="../../assets/imgs/RankListImg/fanhui.png" alt=""></router-link>
    <span>QQ音乐排行榜</span>
</div> 
</template>
<script>
export default {
    name:"musicRankTitle",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* musicRankTitle */
.musicRankTitle{
    width:100%;
    display:-webkit-flex;
    height:.43rem;
    -webkit-align-items:center;
}
.musicRankTitle img{
    width:.13rem;
    height:.21rem;
    margin-left:.16rem;
    margin-right: .99rem;
}
.musicRankTitle span{
    font-size: .17rem;
    color:#0a0a0a;
    display: block;
}
</style>


