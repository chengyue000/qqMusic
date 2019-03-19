<template>
    <!-- footer -->
    <footer>
        <div class="foot_left">
            <img src="../../assets/imgs/hallImg/footer-1.png" alt="">
        </div>
        <div class="foot_middle">
            <span>Numb</span>
            <span>左右横滑可切换上下首</span>
        </div>
        <div class="foot_right">
            <span class="iconfont icon-bofang"></span>
            <span class="iconfont icon-gedan"></span>
        </div>
    </footer>
</template>
<script>
export default {
    name:"musicHallFooter",
}
</script>
<style>
/* footer */
footer{
    width:100%;
    height:.55rem;
    display: -webkit-flex;
    align-items: center;
    border-top:1px solid #e5e5e5;
}
footer .foot_left img{
    width:.39rem;
    height:.39rem;
    margin:0 .12rem;
}
footer span{
    display: block;
}
footer .foot_middle span:nth-child(1){
    color:#080808;
    font-size:13px;
}
footer .foot_middle span:nth-child(2){
    font-size:12px;
    color:#6bc48c;
}
footer .foot_right{
    display: -webkit-flex;
    align-items: center;
}
footer .foot_right span:nth-child(1){
    font-size:.3rem;
    color:#6bc48c;
    margin-left:.94rem;
    margin-right:.21rem;
}
footer .foot_right span:nth-child(2){
    font-size:.2rem;
    color:#6bc48c;
}
</style>


