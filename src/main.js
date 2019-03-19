// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iconfont from '@/assets/css/iconfont.css'
//导入swiper
import VueAwesomeSwiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'
//注册
Vue.use(VueAwesomeSwiper);
// import axios from 'axios'

// Vue.prototype.$http=axios

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h){
    return h(App)
  }
})
