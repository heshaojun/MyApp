<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  workId: String,
});
const router = useRouter();

onMounted(() => {});
</script>
<template>
  <div class="check-by-me"></div>
</template>
<style lang="scss" scoped>
.check-by-me {
  width: 100%;
  height: 100%;
}
</style>
