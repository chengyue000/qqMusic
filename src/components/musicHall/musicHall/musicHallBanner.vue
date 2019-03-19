<template>
    <swiper v-if="value.menuListOption" :options="value.menuListOption" ref="menuListSwiper">
      <swiper-slide v-for="(i,index) in value.bannerImg" :key="index">
          <router-link :to="i.url" tag="img" :src="i.img"></router-link>
      </swiper-slide>
    <!--以下看需要添加-->
    <div class="my-pagination" slot="pagination"></div> 
    </swiper>
</template>
<script>
export default {
    name:"musicHallBanner",
    props:["value"],
//    data(){
//     return{
//       swiperOption: {//swiper3
//       autoplay: 3000,
//       speed: 1000,
//       }
//     }
//   }
}
</script>
<style>
@import 'swiper/dist/css/swiper.css';
.swiper-container {
    width:100%;
    /* position: relative; */
}
img{
    width:100%;
}
</style>


