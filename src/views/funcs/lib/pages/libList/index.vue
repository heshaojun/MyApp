<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const libId = route.query["libId"];
const libName = route.query["libName"];
</script>
<template>
  <div class="lib-list">
    <van-nav-bar
      :title="libName"
      left-arrow
      left-text="返回"
      @click-left="router.back()"
      @click-right="
        router.push({ path: '/libSearch', query: { libId: libId } })
      "
    >
      <template #right>
        <svg-icon name="search" size="1rem" color="var(--van-primary-color)" />
      </template>
    </van-nav-bar>
  </div>
</template>
<style lang="scss" scoped>
.lib-list {
  width: 100%;
  height: 100%;
}
</style>