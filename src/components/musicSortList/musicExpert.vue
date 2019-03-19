<template>
<!-- musicExpert -->
<div class="musicExpert">
    <div class="expertTitle">
        <h2 class="public_h2">歌曲达人馆</h2>
        <img src="../../assets/imgs/sortImg/gengduo.png" alt="">
    </div>
    <div class="expertCon">
        <img src="../../assets/imgs/sortImg/sort-7.png" alt="">
        <div class="expertConRight">
            <p>
                <span>涩涩的大棕熊</span>
                <span>3960人关注 歌曲达人</span>
            </p>
            <img src="../../assets/imgs/sortImg/dayu.png" alt="">
        </div>   
    </div>
    <div class="expertCon">
        <img src="../../assets/imgs/sortImg/sort-7.png" alt="">
        <div class="expertConRight">
            <p>
                <span>涩涩的大棕熊</span>
                <span>3960人关注 歌曲达人</span>
            </p>
            <img src="../../assets/imgs/sortImg/dayu.png" alt="">
        </div>   
    </div>
    <div class="expertCon">
        <img src="../../assets/imgs/sortImg/sort-7.png" alt="">
        <div class="expertConRight">
            <p>
                <span>涩涩的大棕熊</span>
                <span>3960人关注 歌曲达人</span>
            </p>
            <img src="../../assets/imgs/sortImg/dayu.png" alt="">
        </div>   
    </div>
    <div class="expertCon">
        <img src="../../assets/imgs/sortImg/sort-7.png" alt="">
        <div class="expertConRight">
            <p>
                <span>涩涩的大棕熊</span>
                <span>3960人关注 歌曲达人</span>
            </p>
            <img src="../../assets/imgs/sortImg/dayu.png" alt="">
        </div>   
    </div>
</div>
</template>
<script>
export default {
    name:"musicExpert",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* musicExpert */
.musicExpert h2{
    margin-top:.16rem;
}
.expertTitle{
    width:100%;
    display: -webkit-flex;
    -webkit-align-items:center;
    justify-content: space-between;
}
.expertTitle img{
    width:.16rem;
    height:.16rem;
    margin-right:.15rem;
}
.expertCon{
    display: -webkit-flex;
    -webkit-align-items:center;
    height:.68rem;
}
.expertCon img:first-child{
    width:.55rem;
    height:.55rem;
    margin-left:.12rem;
    margin-right: .1rem;
}
.expertConRight{
    height:.68rem;
    width:2.98rem;
    display: -webkit-flex;
    -webkit-align-items:center;
    justify-content: space-between;
    border-bottom: 1px solid #f6f6f6;
}
.expertConRight img{
    width:.07rem;
    height:.11rem;
    margin-right:.14rem;
}
.expertConRight p span:first-child{
    font-size:14px;
    color:#000000;
    display: block;
}
.expertConRight p span:last-child{
    font-size:12px;
    color:#858585;
    display: block;
}
</style>


