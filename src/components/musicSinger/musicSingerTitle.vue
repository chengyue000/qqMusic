<template>
<!-- musicSingerTitle     -->
<div class="musicSingerTitle">
    <router-link to="/musicHall" tag="a">
        <img src="../../assets/imgs/singerImg/fanhui.png" alt="">
    </router-link>
    <p>
        <span>歌手</span>
        <span>我的</span>
    </p>
    <a href="javascript:;"><img src="../../assets/imgs/singerImg/search.png" alt=""></a>
</div>
</template>
<script>
export default {
    name:"musicSingerTitle",
    
}
</script>
<style>
/* musicSingerTitle */
.musicSingerTitle{
    height:.44rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    -webkit-justify-content:space-between;
}
.musicSingerTitle a:nth-child(1) img{
    width:.11rem;
    height:.17rem;
    margin-left: .18rem;
}
.musicSingerTitle p{
    display: -webkit-flex;
}
.musicSingerTitle p span{
    font-size:13px;
    display: block;
    width:.75rem;
    height:.25rem;
    border:1px solid #000000;
    color:black;
    text-align: center;
    line-height: .25rem;
}
.musicSingerTitle p span:nth-child(1){
    background-color: black;
    color:white;
}

.musicSingerTitle a:last-child img{
    width:.22rem;
    height:.22rem;
    margin-right: .11rem;
}
</style>


