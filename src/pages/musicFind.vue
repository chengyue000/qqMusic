<template>
   <div class="bigBox">
        <music-hall-header></music-hall-header>
        <music-find-move></music-find-move>
        <music-hall-footer></music-hall-footer>

   </div>
</template>

<script>
    import musicHallHeader from "../components/common/musicHallHeader.vue"
    import musicFindMove from "../components/musicFind/musicFindMove.vue"
    import musicHallFooter from "../components/common/musicHallFooter.vue"
    
export default {
    name:"musicFind",
    components:{
       musicHallHeader,
       musicFindMove,
        musicHallFooter
    }
}
</script>
<style>

@import "../assets/css/public";
.bigBox{
    height:100%;
    display: -webkit-flex;
    flex-direction: column;
}
</style>

