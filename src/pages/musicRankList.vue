<template>
   <div>
        <music-rank-title></music-rank-title>
        <music-rank-all></music-rank-all>
        <features-rank></features-rank>
        <features-rank></features-rank>
        <features-rank></features-rank>
        <music-hall-footer></music-hall-footer>
   </div>
</template>

<script>
    import musicRankTitle from "../components/musicRankList/musicRankTitle.vue"
    import musicRankAll from "../components/musicRankList/musicRankAll.vue" 
    import featuresRank from "../components/musicRankList/featuresRank.vue"   
    import musicHallFooter from "../components/common/musicHallFooter.vue"
    
export default {
    name:"musicRankList",
    components:{
       musicRankTitle,
       musicRankAll,
       featuresRank,
       musicHallFooter,
      
    }
}
</script>
<style>

@import "../assets/css/public";

</style>

