<template>
    <!-- guan_zhu -->
    <div class="guan_zhu" v-if="data">
        <h2>我的关注</h2>
        <div class="guan_zhu_con">
            <img :src="data.personalCare.updateImg" alt="">
            <p>
                <span>{{data.personalCare.updateWord}}</span>
                <span>{{data.personalCare.updateSinger}}</span>
            </p>
            <img src="../../assets/imgs/mineImg/dayu.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"musicGuanZhu",
    props:["data"],
    data(){
        return{
            obj:{
                
            }
        }
    }
}
</script>
<style>
/* guan_zhu */
.guanz_zhu{
    width:100%;
}
.guan_zhu h2{
    width:3.47rem;
    font-weight:100;
    font-size:.15rem;
    margin:0 auto;
    line-height: .42rem;
}
.guan_zhu_con{
    width:3.47rem;
    display: -webkit-flex;
    justify-content: space-between;
    height: .55rem;
    align-items: center;
    margin:0 auto;
}
.guan_zhu_con img:nth-child(1){
    width:.6rem;
    height:.55rem;
    margin-right: .07rem;
}
.guan_zhu_con img:nth-child(3){
    width:.07rem;
    height:.11rem;
    margin-right: .08rem;
    margin-left: .24rem;
}
.guan_zhu_con p span:nth-child(1){
    font-size:.15rem;
    color:black;
    display: block;
}
.guan_zhu_con p span:nth-child(2){
    font-size:12px;
    color:#666666;
    display: block;
}
</style>


