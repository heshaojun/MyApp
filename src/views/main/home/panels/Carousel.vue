<!--轮播图面板-->
<script setup>
import { onMounted, getCurrentInstance, ref, computed } from "vue";
import { useStore } from "vuex";

const { proxy } = getCurrentInstance();
const store = useStore();
const componentHeight = ref();
const swipeList = computed(() => store.state.home.swipeList)
onMounted(() => {
  let currentComponent = proxy.$refs["panel-carousel"];
  componentHeight.value = currentComponent.clientWidth / 2 + "px";
  store.dispatch("home/fetchSwipeList")
});
</script>
<template>
  <div class="panel-carousel" ref="panel-carousel">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item">
        <van-image :src="item" :height="componentHeight" width="100%" fit="cover" />
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
