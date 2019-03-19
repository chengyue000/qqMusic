<template>
   <div class="bigBox">
       <music-enjoy-title></music-enjoy-title>
       <music-enjoy-list></music-enjoy-list>
        <music-enjoy-move></music-enjoy-move>
        <music-hall-footer></music-hall-footer>
   </div>
</template>

<script>
    import musicEnjoyTitle from "../components/musicEnjoy/musicEnjoyTitle.vue"
    import musicEnjoyList from "../components/musicEnjoy/musicEnjoyList.vue"
    import musicEnjoyMove from "../components/musicEnjoy/musicEnjoyMove.vue"
    import musicHallFooter from "../components/common/musicHallFooter.vue"
    
export default {
    name:"musicEnjoy",
    components:{
        musicEnjoyTitle,
        musicEnjoyList,
        musicEnjoyMove,
       musicHallFooter,
      
    }
}
</script>
<style>

@import "../assets/css/public";
.bigBox{
    height:100%;
    display:-webkit-flex;
    flex-direction: column;
}
</style>

