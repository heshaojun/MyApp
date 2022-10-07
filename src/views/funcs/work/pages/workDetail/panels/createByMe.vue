<script setup>
import { onMounted } from "vue";
const props = defineProps({
  workId: String,
});

onMounted(() => {});
</script>
<template>
  <div class="create-by-me">我创建的工作</div>
</template>
<style lang="scss" scoped>
.create-by-me {
  width: 100%;
}
</style>
