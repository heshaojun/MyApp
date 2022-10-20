<script setup>
import { ref } from "vue";
import nodeTree from "./nodeTree.vue";
const props = defineProps({
  staionId: String,
});
const docTreeData = ref([
  { title: "节点1", id: "1", type: "folder" },
  { title: "节点2", id: "2", type: "folder" },
]);
</script>
<template>
  <div class="doc-options">
    <div>dfdsaf</div>
    <node-tree v-for="node in docTreeData" :key="node" :nodeData="node" />
  </div>
</template>
<style lang="scss" scoped>
.doc-options {
}
</style>