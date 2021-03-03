<template>
  <div class="nav-bar" :style="changeBg">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"NavBar",
    props:{
        bgColor:{
            type:String,
            default:"blue"
        }
    },
    computed:{
        changeBg(){
            return {background:this.bgColor}
        }
    }
}
</script>

<style scoped>
.nav-bar{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    display: flex;

    position:absolute;
    top: 0;
    left: 0;
    right: 0;
}

.left,.right{
    flex: 3;
}

.center{
    flex: 4;
}
</style>