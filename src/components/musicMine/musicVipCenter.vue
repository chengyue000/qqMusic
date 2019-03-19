<template>
   <!-- vip_center -->
    <div class="vip_center" v-if="data">
        <div class="vip_con">
            <div class="vip_left">
                <img src="../../assets/imgs/mineImg/vip-1.png" alt="">
                <p>
                    <span class="word_one">活动积分</span>
                    <span class="word_two">立即签到领积分</span>
                </p>
            </div>
            <img class="vip_middle" src="../../assets/imgs/mineImg/vip-3.png" alt="">
            <div class="vip_right">
                <img src="../../assets/imgs/mineImg/vip-2.png" alt="">
                <p>
                    <span class="word_one">会员中心</span>
                    <span class="word_two">{{data.vipCenter}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"musicVipCenter",
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
/* vip_center */
.vip_center{
    width:100%;
    
}
.vip_con{
    width:3.47rem;
    height:.6rem;
    margin:0 auto;
    box-shadow: -.03rem .03rem .03rem #f5f5f5, .03rem .03rem .03rem#f5f5f5;
    display:-webkit-flex;
    -webkit-align-items:center;
    justify-content: center;
}
.vip_left{
    display:-webkit-flex;
    -webkit-align-items:center;
    
}
.vip_right{
    display:-webkit-flex;
    -webkit-align-items:center;
}
.vip_left img{
    width:.14rem;
    height:.15rem;
    margin-top:.07rem;
}
.vip_left p{
    margin-right:.34rem;
    margin-left:.14rem;
}

.vip_con p span:nth-child(1){
    font-size:13px;
    color:#111111;
    display:block;
}
.vip_con p span:nth-child(2){
    font-size:11px;
    color:#7f7f7f;
    display:block;
}
.vip_middle{
    width:.01rem;;
    height:.2rem;
}
.vip_right img{
    width:.19rem;
    height:.16rem;
    margin-left:.24rem;
    margin-right:.14rem;
    margin-top:.07rem;
}
</style>


