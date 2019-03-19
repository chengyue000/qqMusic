<template>
<!-- editorsRecommend -->
<div class="editorsRecommend">
    <h2 class="public_h2">编辑推荐</h2>
    <div class="editorsCon">
        <img src="../../assets/imgs/sortImg/sort-2.png" alt="">
        <img src="../../assets/imgs/sortImg/sort-2.png" alt="">
        <img src="../../assets/imgs/sortImg/sort-2.png" alt="">
        <img src="../../assets/imgs/sortImg/sort-2.png" alt="">
    </div>
</div>
</template>
<script>
export default {
    name:"editorsRecommend",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* editorsRecommend */
.editorsRecommend h2{
    margin-top:.11rem;
}
.editorsCon {
    
    display:-webkit-flex;
    overflow-x: auto;
}
.editorsCon img{
    width:2.9rem;
    height:1.67rem;
    flex-shrink: 0;
    margin-right: .04rem;
}
.editorsCon img:first-child{
    margin-left:.12rem;
}
</style>


