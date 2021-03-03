<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TabBar",
}
</script>

<style>
.tab-bar{
    width: 100%;
    height: 49px;
    background: white;
    color: black;
    border-top: 2px solid rgb(233, 230, 230);
    position:absolute;
    bottom: -49px;
    left: 0;
    right: 0;

    display: flex;
}
</style>