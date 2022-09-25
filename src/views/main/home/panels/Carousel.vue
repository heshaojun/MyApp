<!--轮播图面板-->
<script setup>
import {onMounted, getCurrentInstance, ref} from "vue";
import swipe1 from "@/assets/imgs/swipe1.jpg"
import swipe2 from "@/assets/imgs/swipe2.jpg"

const {proxy} = getCurrentInstance();
const componentHeight = ref();
const swipeList = ref([swipe1 , swipe2, swipe1])
onMounted(() => {
  let currentComponent = proxy.$refs["panel-carousel"];
  componentHeight.value = currentComponent.clientWidth / 2 + "px";
});
</script>
<template>
  <div
      class="panel-carousel"
      ref="panel-carousel"
  >
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item">
        <van-image :src="item" :height="componentHeight" width="100%" fit="cover"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style lang="scss" scoped>
.panel-carousel {
  width: 100%;
  background-color: white;
}
</style>
