<template>
  <div class="swiper">
    <div class="">
      <slot></slot>
    </div>

    <slot name="indcator"></slot>

    <div class="indicator">
      <slot name="indicator"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  
};
</script>

<style>
</style>