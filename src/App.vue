<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
const show = ref(false);
const { proxy } = getCurrentInstance();
const toPoint = (id) => {
  show.value = false;
  window.location.hash = id;
  document.getElementById(id);
};
const scrollMehod = (x) => {
  let el = document.getElementById("fdasfdsafsa");
  console.log(el.offsetTop);

  console.log(x.target);
};
onMounted(() => {
  window.addEventListener("scroll", scrollMehod, true);
});
</script>

<template>
  <div class="pdf-viewer-page" id="fdasfdsafsa">
    <div class="head-bar" @click="show = true">fdafda</div>
    <van-popup
      v-model:show="show"
      position="left"
      style="width: 70%; height: 100%"
    >
      <div>
        <div
          style="
            width: 100%;
            background-color: aquamarine;
            position: sticky;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          目录
        </div>
        <div @click="toPoint('#id1')">fsdafdsa1</div>
        <div @click="toPoint('#id2')">fsdafdsa2</div>
        <div @click="toPoint('#id3')">fsdafdsa3</div>
        <div @click="toPoint('#id4')">fsdafdsa4</div>
      </div>
    </van-popup>
    <div style="height:100%;overflow:auto;background-color: blue;">
      f
    </div>
  </div>
</template>

<style scoped lang="scss">
.pdf-viewer-page {
  background-color: aqua;
  height: 100%;
  width: 100%;
  overflow: hidden;
  
}
</style>
