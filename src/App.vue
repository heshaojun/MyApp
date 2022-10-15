<script setup>
import { ref } from "vue";

const excludeView = ref(["addNewWork", "workDetail", "newApprove", "borrowApply", "entryApply"]);
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :exclude="excludeView">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style scoped lang="scss">

</style>
