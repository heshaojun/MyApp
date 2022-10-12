<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const route = useRoute();
const libId = route.query["libId"];

onMounted(() => {});
</script>
<template>
  <div class="lib-search">
    <div
      style="
        width: 100%;
        background-color: #ffffff;
        font-size: var(--van-font-size-md);
      "
    >
      <div style="display: flex; align-items: center; margin: 0.5rem 1rem">
        <div style="font-size:var(--van-font-size-sm)">下拉列表下拉列表</div>
        <div style="flex: 1"></div>
        <div>取消</div>
      </div>
    </div>
    <div style="flex: 1">fdafsd</div>
  </div>
</template>
<style lang="scss" scoped>
.lib-search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

