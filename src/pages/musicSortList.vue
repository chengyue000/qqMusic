<template>
   <div>
        <music-sort-title></music-sort-title>
        <music-classify></music-classify>
        <editors-recommend></editors-recommend>
        <life-plan></life-plan>
        <music-expert></music-expert>
        <music-hall-footer></music-hall-footer>
   </div>
</template>

<script>
    import musicSortTitle from "../components/musicSortList/musicSortTitle.vue"
    import musicClassify from "../components/musicSortList/musicClassify.vue"
    import editorsRecommend from "../components/musicSortList/editorsRecommend.vue"
    import lifePlan from "../components/musicSortList/lifePlan.vue"
    import musicExpert from "../components/musicSortList/musicExpert.vue"
    import musicHallFooter from "../components/common/musicHallFooter.vue"
    
export default {
    name:"musicSortList",
    components:{
       musicSortTitle,
       musicHallFooter,
       musicClassify,
       editorsRecommend,
       lifePlan,
       musicExpert
      
    }
}
</script>
<style>

@import "../assets/css/public";
.public_h2{
    font-size: .15rem;
    color:#000000;
    font-weight:100;
    line-height:.45rem;
    margin-left:.12rem;
    
}
</style>

