<template>
  <div v-if= "musicHallInfo" class="musicHallArea">
    <music-hall-header></music-hall-header>
    <music-hall-move v-if="musicHallInfo" :data="musicHallInfo"></music-hall-move>
    <music-hall-footer></music-hall-footer>
  </div>
</template>

<script>
import musicHallHeader from "../components/common/musicHallHeader.vue";
import musicHallMove from "../components/musicHall/musicHallMove.vue";
import musicHallFooter from "../components/common/musicHallFooter.vue";
import axios from "Axios";
export default {
  name: "musicHall",
  components: {
    "music-hall-move": musicHallMove,
    "music-hall-header": musicHallHeader,
    "music-hall-footer": musicHallFooter
  },
  data() {
    return {
      musicHallInfo: {}
    };
  },
  methods: {
    _initData() {
      axios.get("../../static/musicHall.json").then(res => {
        this.musicHallInfo = res.data;
        console.log(this.musicHallInfo)
      });
    }
  },
  created() {
    this._initData()
  }
};
</script>
<style>
@import "../assets/css/public";
.musicHallArea{
  height:100%;
  display:-webkit-flex;
  flex-direction: column;
}
</style>

