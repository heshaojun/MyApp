<script setup>
import { inject, onMounted, ref } from "vue";
const props = defineProps({
  nodeData: Object,
});
const emits = defineEmits(["nodeCheck", "nodeUnheck"]);
//当前节点勾选状态
const nodeChecked = ref(false);
//直属子节点展开状态
const nodeExpand = ref(false);

const handleCheckStateChange_ = () => {
  if (nodeChecked.value === true) {
  }
};

const handleChecked_ = () => {};
const handleUnchecked_ = () => {};

onMounted(() => {});
</script>
<template>
  <div class="node-tree">
    <div class="title">
      <input
        type="checkbox"
        :checked="nodeChecked"
        @change="handleCheckStateChange_"
      />
      <div>{{ props.nodeData.title }}</div>
      <template v-if="props.nodeData.type === 'folder'">
        <svg-icon v-if="nodeExpand === true" name="arrow-up" size="1rem" />
        <svg-icon v-else name="arrow-down" size="1rem" />
      </template>
    </div>
    <div class="nodes"></div>
  </div>
</template>
<style lang="scss" scoped>
.node-tree {
  > .title {
    display: flex;
    align-items: center;
  }
}
</style>