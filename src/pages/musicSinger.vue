<template>
   <div>
        <music-singer-title></music-singer-title>
        <music-group></music-group>
        <music-singer-list></music-singer-list>
        <music-hall-footer></music-hall-footer>
   </div>
</template>

<script>
    import musicSingerTitle from "../components/musicSinger/musicSingerTitle.vue"
    import musicGroup from "../components/musicSinger/musicGroup.vue"
    import musicSingerList from "../components/musicSinger/musicSingerList.vue"
    import musicHallFooter from "../components/common/musicHallFooter.vue"
    
export default {
    name:"musicSinger",
    components:{
       musicSingerTitle,
       musicGroup,
       musicSingerList,
       musicHallFooter,
      
    }
}
</script>
<style>

@import "../assets/css/public";

</style>

