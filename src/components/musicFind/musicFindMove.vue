<template>
   <div class="moveBox">
        <music-find-video></music-find-video>
        <music-local-show></music-local-show>
        <music-video-info></music-video-info>

   </div>
</template>

<script>
    import musicFindVideo from "./musicFindVideo.vue"
    import musicLocalShow from "./musicLocalShow.vue"
    import musicVideoInfo from "./musicVideoInfo.vue"
    
export default {
    name:"musicFindMove",
    components:{
       musicFindVideo,
       musicLocalShow,
       musicVideoInfo,
    }
}
</script>
<style>
.moveBox{
    flex: 1;
    overflow-y: auto;
}

</style>

