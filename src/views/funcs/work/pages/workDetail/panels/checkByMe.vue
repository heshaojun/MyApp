<script setup>
import { onMounted } from "vue";
const props = defineProps({
  workId: String,
});

onMounted(() => {});
</script>
<template>
  <div class="check-by-me">我验收的工作props{{ props.workId }}</div>
</template>
<style lang="scss" scoped>
.check-by-me {
  width: 100%;
}
</style>
