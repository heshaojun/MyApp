<script setup>
import { provide, ref, watch } from "vue";
import nodeTree from "./nodeTree.vue";
const props = defineProps({
  staionId: String,
  selectedDocs: Object,
});
const emits = defineEmits();
const docTreeData = ref([
  {
    title: "节点1",
    id: "1",
    type: "folder",
    children: [
      {
        title: "节点11",
        id: "11",
        type: "folder",
        children: [
          {
            title: "节点111",
            id: "111",
            type: "doc",
          },
          {
            title: "节点112",
            id: "112",
            type: "folder",
            children: [{ title: "节点1121", id: "1121", type: "doc" }],
          },
        ],
      },
      {
        title: "节点12",
        id: "12",
        type: "doc",
      },
    ],
  },
  { title: "节点2", id: "2", type: "folder" },
]);
const selectDocIdSet = ref(new Set());

watch(selectDocIdSet.value, (value) => {
  emits("update:selectedDocs", [...value]);
});

provide("selectDocIdSet", selectDocIdSet);
</script>
<template>
  <div class="doc-options">
    <node-tree v-for="node in docTreeData" :key="node" :nodeData="node" />
  </div>
</template>
<style lang="scss" scoped>
.doc-options {
  width: 100%;
}
</style>