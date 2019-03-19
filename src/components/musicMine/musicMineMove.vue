<template>
   <div class="moveBox" v-if="data&&data.musicUser">
        <music-person-info :data="data.musicUser"></music-person-info>
        <music-vip-center :data="data"></music-vip-center>
        <music-about-music :data="data"></music-about-music>
        <music-guan-zhu :data="data"></music-guan-zhu>
        <music-ge-dan></music-ge-dan>
        <music-ge-dan-list :data="data"></music-ge-dan-list>

   </div>
</template>

<script>
    import musicPersonInfo from "./musicPersonInfo.vue"
    import musicVipCenter from "./musicVipCenter.vue"
    import musicAboutMusic from "./musicAboutMusic.vue"
    import musicGuanZhu from "./musicGuanZhu.vue"
    import musicGeDan from "./musicGeDan.vue"
    import musicGeDanList from "./musicGeDanList.vue"  
    
export default {
    name:"musicMine",
    props:["data"],
    components:{
       musicPersonInfo,
        musicVipCenter,
        musicAboutMusic,
        musicGuanZhu,
        musicGeDan,
        musicGeDanList
    }
}
</script>
<style>
.moveBox{
    flex:1;
    overflow-y:auto;
}
</style>

