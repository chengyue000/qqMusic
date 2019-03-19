<template>
   <div v-if="data" class="moveCon">
        
        <music-hall-banner :value="data"></music-hall-banner>
        <music-hall-type :value="data"></music-hall-type>
        <music-hall-tui :value="data.recommendAlbum"></music-hall-tui>
        <music-hall-ge-dan :value="data"></music-hall-ge-dan>
        <music-hall-newest :value="data.newestAlbum"></music-hall-newest>
   </div>
</template>

<script>
    import musicHallBanner from "./musicHall/musicHallBanner.vue"
    import musicHallType from "./musicHall/musicHallType.vue"
    import musicHallTui from "./musicHall/musicHallTui.vue"
    import musicHallGeDan from "./musicHall/musicHallGeDan.vue"
    import musicHallNewest from "./musicHall/musicHallNewest.vue"
export default {
    name:"musicHallMove",
    props:["data"],
    components:{
        // "music-hall-header":musicHallHeader,
        "music-hall-banner":musicHallBanner,
        "music-hall-type":musicHallType,
        "music-hall-tui":musicHallTui,
        "music-hall-ge-dan":musicHallGeDan,
        "music-hall-newest":musicHallNewest
    },
    mounted(){
        console.log(this.data)
    }
}
</script>
<style>
.moveCon{
    flex:1;
    overflow-y: auto;
}

</style>

