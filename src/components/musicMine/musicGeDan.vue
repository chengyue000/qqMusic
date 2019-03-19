<template>
    <div>
        <div class="own_gedan">
            <div class="own_left">
                <h2>自建歌单3</h2>
                <img src="/static/imgs/mineImg/own-1.png" alt="">
                <h2>收藏歌单9</h2>
            </div>
            <img src="/static/imgs/mineImg/gengduo.png" alt="">
        </div>
    </div>
    
</template>
<script>
export default { 
    name:"musicGeDan",
    data(){
        return{
            obj:{
               
            }
        }
    },
}
</script>
<style>
/* own_gedan */
.own_gedan{
    width:3.47rem;
    margin:0 auto;
    display: -webkit-flex;
    -webkit-align-items:center;
    justify-content: space-between;
}
.own_gedan h2{
    font-weight: 100;
    font-size:.15rem;
    line-height: .42rem;
}
.own_left {
    display: -webkit-flex;
    -webkit-align-items:center;
}
.own_left img{
    width:.01rem;
    height:.16rem;
    margin:0 .08rem;
}
 h2:first-child{
     color:#666666;
 }
.own_gedan img:last-child{
    width:.17rem;
    height:.15rem;
}
</style>


