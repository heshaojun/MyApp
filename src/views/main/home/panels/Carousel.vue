<script setup>
import { onMounted, getCurrentInstance, reactive, ref } from "vue";
const { proxy } = getCurrentInstance();
const componentHeght = ref();
const swipeList = ref(["1","2","3"])
onMounted(() => {
  let currentComponent = proxy.$refs["panel-carousel"];
  componentHeght.value = currentComponent.clientWidth / 2 + "px";
});
</script>
<template>
  <div
    class="panel-carousel"
    ref="panel-carousel"
    :style="{ height: componentHeght }"
  >
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="index,item in swipeList" :key="index">
                <div>{{item}}</div>
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
