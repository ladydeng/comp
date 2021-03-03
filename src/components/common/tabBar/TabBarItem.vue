<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="styleChange"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    color:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      // 如果当前路由对象里存在当前url，则该组件活跃
      return this.$route.path.indexOf(this.path) == -1;
    },
    styleChange(){
      return !this.isActive?{color:this.color}:""
    }
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>