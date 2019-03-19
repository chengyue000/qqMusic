<template>
  <!-- findVideo -->
    <div class="findVideo">
        <a href="javascript:;"><img src="../../assets/imgs/findImg/find-1.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/findImg/find-1.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/findImg/find-1.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/findImg/find-1.png" alt=""></a>
        <a href="javascript:;"><img src="../../assets/imgs/findImg/find-1.png" alt=""></a>
    </div>
</template>
<script>
export default {
    name:"musicFindVideo",
    data(){
        return{
            obj:{
               
            }
        }
    }
}
</script>
<style>
/* findVideo */
.findVideo{
    display:-webkit-flex;
    height:2.1rem;
    align-items: center;
    overflow-x: auto;
}
.findVideo img{
    width:3.45rem;
    height:1.95rem;
    margin-right: .05rem;
}
.findVideo a:first-child img{
    margin-left: .1rem;
}
</style>


