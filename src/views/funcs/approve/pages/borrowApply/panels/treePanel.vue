<script setup>
import { getCurrentInstance, onMounted } from "vue";
const props = defineProps({
  nodeData: Object,
});
const { proxy } = getCurrentInstance();

onMounted(() => {});
</script>
<template>
  <div class="tree-pannel">
    <div class="title">{{ props.nodeData.title }}</div>
    <tree-panel
      class="node"
      v-for="node in props.nodeData.children"
      :key="node"
      :nodeData="node"
      :ref="
        (el) => {
          console.log(el);
        }
      "
    />
  </div>
</template>
<style lang="scss" scoped>
.tree-pannel > .node {
  margin-left: 2rem;
}
</style>