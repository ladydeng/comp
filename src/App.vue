<template>
  <div id="app">
    <router-view></router-view>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

import { getMultiData, getHomeGoods } from "network/home";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
  data(){
    return {
      banners:'',
      goods:''
    }
  },
  methods:{
    // getGoods(type){
    //   const page = 1
    //   getHomeGoods(type,page).then(res => {
    //     this.goods = res
    //     console.log(res)
    //   })
    // }
  },
  created() {
    getMultiData().then((res) => {
      // console.log(res);
      this.banners = res.data.data.banner.list
    });

    getHomeGoods("pop",1).then(res => {
        this.goods = res.data.data.list
        console.log(res)
      })
  },
};
</script>

<style scoped>
@import "assets/css/base.css";

.tab-control {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
}
</style>
