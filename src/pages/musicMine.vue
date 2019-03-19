<template>
   <div class="bigBox" v-if="musicMineInfo">
        <music-hall-header></music-hall-header>
        <music-mine-move v-if="musicMineInfo" :data="musicMineInfo"></music-mine-move>
        <music-hall-footer></music-hall-footer>
   </div>
</template>

<script>
    import musicHallHeader from "../components/common/musicHallHeader.vue"
    import musicMineMove from "../components/musicMine/musicMineMove.vue" 
    import musicHallFooter from "../components/common/musicHallFooter.vue"
    import axios from "Axios";
export default {
    name:"musicMine",
    components:{
       musicHallHeader,
        musicHallFooter,
        musicMineMove
    },
    data(){
        return {
            musicMineInfo:{}
        }
    },
    methods:{
        _initData(){
            axios.get("../../static/musicMine.json").then(res=>{
                this.musicMineInfo=res.data;
                console.log(this.musicMineInfo)
            })
        }
    },
    created(){
        this._initData();
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

