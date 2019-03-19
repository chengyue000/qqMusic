<template>
    <!-- type_all -->
<div class="type_all">
    <div class="type_select">
        <router-link to='/musicSinger' tag="a"><span class="iconfont icon-geshou"></span><span class="type_word">歌手</span></router-link>
        <router-link to='/musicRankList' tag="a"><span class="iconfont icon-paihang"></span><span class="type_word">排行</span></router-link>
        <router-link to='/musicSortList' tag="a"><span class="iconfont icon-fenlei"></span><span class="type_word">分类歌单</span></router-link>
        <a href="##"><span class="iconfont icon-diantai"></span><span class="type_word">电台</span></a>
        <a href="##"><span class="iconfont icon-shipin"></span><span class="type_word">视频</span></a>
    </div>
</div>
</template>
<script>
export default {
    name:"musicHallType",
}
</script>
<style>
/* type_all */
.type_all{
    height:1rem;
    width:100%;
    position: relative;
    background: white;
}
.type_select{
    background: white;
    width:3.59rem;
    height:.85rem;
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left:.08rem;
    z-index: 100;
    top:-.06rem;
    box-shadow: -.03rem .03rem .03rem #f5f5f5, .03rem .03rem .03rem#f5f5f5;
}
.type_select span{
    display: block;
}
.type_select a{
    text-align: center;
}
.type_select .iconfont{
    font-size:.2rem;
    color:#62bf82;
    margin-bottom: .06rem;
}
.type_select .type_word{
    font-size:.14rem;
    color:#3a3a3a;
}
.type_select  .icon-diantai,.type_select  .icon-shipin{
    font-weight: 600;
}
</style>


