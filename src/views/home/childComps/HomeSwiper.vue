<template>
  <div class="home-swiper">
      <swiper>
          <swiper-item v-for="(item,index) in images" :key="index">
              <a href="#">
                  <img :src="item" alt="">
                  <!-- <span>{{item}}</span> -->
              </a>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper"
import SwiperItem from "components/common/swiper/SwiperItem"

export default {
  name: "HomeSwiper",
  data(){
      return {
         images:[
             "~assets/img/swiper/swiper_01.jpg",
             "~assets/img/swiper/swiper_02.jpg",
             "~assets/img/swiper/swiper_03.jpg",
             "~assets/img/swiper/swiper_04.jpg",
         ]
      }
  },
  components:{
      Swiper,
      SwiperItem
  },
};
</script>

<style scoped>
img{
    width: 100%;
    height: 100px;
}
</style>