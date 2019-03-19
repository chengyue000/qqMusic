<template>
<!-- musicGroup -->
<div class="musicGroup">
    <div class="group groupOne">
        <a href="javascript:;">全部</a>
        <a href="javascript:;">内地</a>
        <a href="javascript:;">港台</a>
        <a href="javascript:;">欧美</a>
        <a href="javascript:;">日本</a>
        <a href="javascript:;">韩国</a>
        <a href="javascript:;">其他</a>
    </div>
    <div class="group groupTwo">
        <a href="javascript:;">全部</a>
        <a href="javascript:;">男</a>
        <a href="javascript:;">女</a>
        <a href="javascript:;">组合</a>
    </div>
    <div class="group groupOne">
        <a href="javascript:;">全部</a>
        <a href="javascript:;">流行</a>
        <a href="javascript:;">嘻哈</a>
        <a href="javascript:;">摇滚</a>
        <a href="javascript:;">电子</a>
        <a href="javascript:;">民谣</a>
        <a href="javascript:;">R&B</a>
        <a href="javascript:;">民歌</a>
        <a href="javascript:;">轻音乐</a>
        <a href="javascript:;">爵士</a>
        <a href="javascript:;">古典</a>
        <a href="javascript:;">乡村</a>
        <a href="javascript:;">蓝调</a>
    </div>
    <div class="groupHot ">
        <span>热</span>
    </div>
</div>
</template>
<script>
export default {
    name:"musicGroup",
    
}
</script>
<style>
/* musicGroup */
.musicGroup .group{
    display: -webkit-flex;
    overflow-x: auto;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e6e6e6;
}
.musicGroup .group a{
    display: block;
    font-size: 14px;
    color:#020202;
    width:.57rem;
    height:.4rem;
    text-align: center;
    line-height: .4rem;
    letter-spacing: .02rem;
    flex-shrink: 0;
}
.musicGroup .group a:nth-child(1){
    color:#7ccb9c;
}
.groupHot{
    background-color: #eaeaea;
    height:.4rem;
    border-bottom: 1px solid #e6e6e6;
}
.groupHot span{
    color:#5f5f5f;
    font-size:12px;
    display: block;
    line-height: .4rem;
    text-indent: .15rem;
}

</style>


