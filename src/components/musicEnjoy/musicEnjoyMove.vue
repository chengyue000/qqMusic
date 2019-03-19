<template>
   <div class="moveBox">
        <music-all-play></music-all-play>
        <music-list></music-list>
   </div>
</template>

<script>
    import musicAllPlay from "./musicAllPlay.vue"
    import musicList from "./musicList.vue"
    
export default {
    name:"musicEnjoyMove",
    components:{
       musicAllPlay,
       musicList
      
    }
}
</script>
<style>
.moveBox{
    flex:1;
    overflow-y: auto;
}
</style>

