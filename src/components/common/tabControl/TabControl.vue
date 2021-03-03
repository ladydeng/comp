<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="itemClick(index)"
      :class="{ active: index == currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style>
.tab-control {
  width: 100%;
  height: 40px;
  background: white;
  display: flex;

  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
}

.tab-control-item {
  flex: 1;
  line-height: 40px;
  text-align: center;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: rgb(243, 136, 48);
}

.active span {
  border-bottom: 2px solid rgb(243, 136, 48);
}
</style>