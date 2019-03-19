<template>
 <!-- enjoyList -->
    <div class="enjoyList">
        <a href="javascript:;">单曲 49</a>
        <a href="">专辑 0</a>
        <a href="">歌单 9</a>
    </div>
</template>
<script>
export default {
    name:"musicEnjoyList",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* enjoyList */
.enjoyList{
    width:100%;
    height:.44rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #e6e6e6;
}
.enjoyList a{
    color:#a2a2a2;
    font-size:.15rem;
}
.enjoyList a:first-child{
    color:#62bf82;
}
</style>


