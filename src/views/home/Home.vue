<template>
  <div class="home">
    <nav-bar bgColor="tomato">
      <div slot="center">购物街(home)</div>
    </nav-bar>
    <tab-control :titles="['新款', '流行', '精选']" class="tab-control" />
    <home-swiper />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/common/tabControl/TabControl";
import HomeSwiper from "./childComps/HomeSwiper";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
  },
};
</script>

<style scoped>
.swiper {
  position: absolute;
  top: 89px;
  right: 0;
  left: 0;
}
</style>