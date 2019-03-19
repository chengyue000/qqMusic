<template>
<!-- musicSortTitle   -->
<div class="musicSortTitle">
    <router-link to="/musicHall"><img src="../../assets/imgs/sortImg/sort-1.png" alt=""></router-link>
    
    <span>分类歌单</span>
</div> 
</template>
<script>
export default {
    name:"musicSortTitle",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* musicSortTitle */
.musicSortTitle{
    width:100%;
    display:-webkit-flex;
    height:.43rem;
    -webkit-align-items:center;
}
.musicSortTitle img{
    width:.13rem;
    height:.21rem;
    margin-left:.16rem;
    margin-right: 1.21rem;
}
.musicSortTitle span{
    font-size: .17rem;
    color:#0a0a0a;
    display: block;
}
</style>


