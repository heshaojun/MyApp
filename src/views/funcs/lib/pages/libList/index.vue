<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const libId = route.query["libId"];
const libName = route.query["libName"];
</script>
<template>
  <div class="lib-list">
    <van-nav-bar :title="libName" left-arrow left-text="返回" @click-left="router.back()" @click-right="
      router.push({ path: '/libSearch', query: { libId: libId } })
    " :safe-area-inset-top="true">
      <template #right>
        <svg-icon name="search" size="1rem" color="var(--van-primary-color)" />
      </template>
    </van-nav-bar>
    <div style="flex: 1;overflow: hidden;">
      <div style="padding: 0.5rem 1rem;background-color: #ffff;">目录栏</div>
      <div style="height:100%;width:100%;overflow-y:auto">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.lib-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>