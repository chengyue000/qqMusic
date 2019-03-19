<template>
<!-- recommendedClassify  -->
<div>
    <div class="recommendedClassify">
        <h2 class="public_h2">推荐分类</h2>
        <img src="../../assets/imgs/sortImg/gengduo.png" alt="">
    </div>
    <classify-list></classify-list>
</div>
</template>
<script>
import classifyList from "./classifyList.vue"
export default {
    name:"musicClassify",
    components:{
        classifyList,
    }
}
</script>
<style>
/* recommendedClassify */
.recommendedClassify{
    width:100%;
    display: -webkit-flex;
    -webkit-align-items:center;
    justify-content: space-between;
}
.recommendedClassify img{
    width:.16rem;
    height:.16rem;
    margin-right:.15rem;
}
</style>


