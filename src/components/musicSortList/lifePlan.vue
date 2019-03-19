<template>
<!-- lifePlan -->
<div class="lifePlan">
    <h2 class="public_h2">生活方案.摩登复古趴</h2>
    <div class="lifePlanCon">
        <div class="planCon">
            <img src="../../assets/imgs/sortImg/sort-3.png" alt="">
            <p class="p_one">粤语劲歌|80年代复古Disco</p>
            <p class="p_two">秋水浮萍任缥缈</p>
        </div>
        <div class="planCon">
            <img src="../../assets/imgs/sortImg/sort-3.png" alt="">
            <p class="p_one">粤语劲歌|80年代复古Disco</p>
            <p class="p_two">秋水浮萍任缥缈</p>
        </div>
        <div class="planCon">
            <img src="../../assets/imgs/sortImg/sort-3.png" alt="">
            <p class="p_one">粤语劲歌|80年代复古Disco</p>
            <p class="p_two">秋水浮萍任缥缈</p>
        </div>
        <div class="planCon">
            <img src="../../assets/imgs/sortImg/sort-3.png" alt="">
            <p class="p_one">粤语劲歌|80年代复古Disco</p>
            <p class="p_two">秋水浮萍任缥缈</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"lifePlan",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* lifePlan */
.lifePlan h2{
    margin-top:.15rem;
}
.lifePlanCon{
    display:-webkit-flex;
    width:3.52rem;
    margin:0 auto;
    justify-content: space-between;
    flex-wrap: wrap;
}
.planCon {
    width:1.73rem;
}
.planCon img{
    width:1.73rem;
    height:1.73rem;
}
.planCon .p_one{
    color:#0c0c0c;
    font-size:12px;
    line-height:.23rem;
    margin-top:.08rem;
}
.planCon .p_two {
    color:#808080;
    font-size:12px;
    line-height:.23rem;
    margin-bottom: .17rem;
}
</style>


