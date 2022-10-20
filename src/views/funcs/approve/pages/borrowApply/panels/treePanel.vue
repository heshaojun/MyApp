<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
const props = defineProps({
  nodeData: Object,
});
const { proxy } = getCurrentInstance();
const expand = ref(false);

//单曲节点选中状态
const checked = ref(false);

//子节点引用对象存储list
const childrenRefList = new Array();
//选中的子节点数据
const selectedNodeList = new Array();
//向上通知的emitObj
const emitObj = { id: props.nodeData.id, children: selectedNodeList }

//ref调用方法，将子节点对象加载进来
const refload_ = (el) => {
  childrenRefList.push(el)
}
const emits = defineEmits(['selected', 'canceled']);

//选择中
const select_ = () => {
  checked.value = true;
  if (props.nodeData.type === "doc") {
    emits('selected', emitObj)
  }
  childrenRefList.forEach(el => {
    el.select_();
  })
}

//取消
const cancel_ = () => {
  checked.value = false
  if (props.nodeData.type === "doc") {
    emits('canceled', emitObj)
  }
  childrenRefList.forEach(el => {
    el.cancel_();
  })
}
//复选框点击事件
const checkboxClick_ = () => {
  if (checked.value == true) {
    cancel_()
  } else {
    select_()
  }
}

//子节点被选中
const nodeSelected_ = (node) => {
  console.log("选中", node)
  if (node.children.length > 0) {
    checked.value = true;
  }
  emits('selected', emitObj)
}
//子节点选中取消
const nodeCanceled_ = (node) => {
  console.log("取消", node);
  let targetIndex = -1;
  for (let index = 0; index < childrenRefList.length; index++) {

  }
  if (node.children.length == 0) {
    checked.value = false;
  }
  emits('canceled', emitObj)
}
defineExpose({
  select_,
  cancel_
})
onMounted(() => {
  console.log(props.nodeData)
});
</script>
<template>
  <div class="tree-pannel">
    <div class="title">
      <input type="checkbox" :checked="checked" @click="checkboxClick_" />
      {{ props.nodeData.title }}
      <div style="margin-left:0.3rem;display: flex;align-items: center;" @click="expand = !expand">
        <template v-if="nodeData.type === 'folder'">
          <svg-icon v-if="expand == true" name="arrow-up" size="0.8rem" />
          <svg-icon v-else name="arrow-down" size="0.8rem" />
        </template>
      </div>
    </div>
    <div class="node" :expand="expand">
      <tree-panel v-for="node in props.nodeData.children" :key="node" :nodeData="node" :ref="refload_"
        @selected="nodeSelected_" @canceled="nodeCanceled_" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tree-pannel {
  font-size: var(--van-font-size-md);

  >.title {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    input {
      width: 1rem;
      height: 1rem;
    }
  }

  >.node {
    margin-left: 2rem;
    transition: all 1s;
  }

  >.node[expand=false] {
    display: none;
  }

}
</style>