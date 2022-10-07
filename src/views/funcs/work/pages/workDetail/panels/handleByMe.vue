<script setup>
import { onMounted } from "vue";
const props = defineProps({
  workId: String,
});

onMounted(() => {});
</script>
<template>
  <div class="handle-by-me">我执行的工作</div>
</template>
<style lang="scss" scoped>
.handle-by-me {
  width: 100%;
}
</style>
