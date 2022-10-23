<script setup>
import { inject, onMounted, ref } from "vue";
const props = defineProps({
  nodeData: Object,
});

const selectDocIdSet = inject("selectDocIdSet");
const emits = defineEmits(["nodeChecked"]);
//当前节点勾选状态
const nodeChecked = ref(false);
//直属子节点展开状态
const nodeExpand = ref(false);

//选中的结果树数据
const checkedNodeCount = ref(0);

//当前节点状态变更事件处理器
const handleCheckStateChange_ = () => {
  if (nodeChecked.value === true) {
    emits("nodeChecked", 1); //向父节点组件发布一个子节点选中事件
    check_(); //触发下级节点选中方法（节点选中，下级所有节点都选中）
  } else {
    emits("nodeChecked", -1); //发布一个子节点取消选中事件
    uncheck_(); //触发下级节点取消选中方法（节点取消选中，下级所有节点都取消选中）
  }
};

//处理单个子节发布的选中事件，复选框主动点击触发，绑定的响应式变量值变更不会触发标签原生事件
const handleNodeChecked_ = (num) => {
  //子节点选中
  if (num == 1) {
    //子节点选中计数加1
    checkedNodeCount.value = checkedNodeCount.value + num;
    //判断子节点选中个数是否从无到有
    if (checkedNodeCount.value === 1) {
      //触发节点选中事件，告诉父节点当前节点选中
      emits("nodeChecked", 1);
    }
    //子节点取消选中
  } else if (num == -1) {
    if (checkedNodeCount.value > 0) {
      ////子节点选中计数加-1
      checkedNodeCount.value = checkedNodeCount.value + num;
      //判断自建的//判断子节点选中个数是否有无到无
      if (checkedNodeCount.value === 0) {
        //触发节点选中事件，告诉父节点当前节点取消选中
        emits("nodeChecked", -1);
      }
    }
  }
  //复选框状态调整
  if (checkedNodeCount.value > 0) {
    nodeChecked.value = true;
  } else {
    nodeChecked.value = false;
  }
};

//存储子节点组件对象数据，用于访问子节点暴露的方法
const nodeRefList = new Array();
//缓存子节点组件对象
const cacheNodeRefList_ = (el) => {
  nodeRefList.push(el);
};

//选中方法
const check_ = () => {
  //更改当前节点复选框选中状态（不会触发input原生事件）
  nodeChecked.value = true;
  //如果是文档节点，将节点数据保存到
  if (props.nodeData.type === "doc") {
    selectDocIdSet.value.add(props.nodeData.id);
  }
  nodeRefList.forEach((el) => {
    el.check_();
  });
};
//取消选中方法
const uncheck_ = () => {
  //更改当前节点复选框取消选中状态（不会触发input原生事件）
  nodeChecked.value = false;
  if (props.nodeData.type === "doc") {
    selectDocIdSet.value.delete(props.nodeData.id);
  }
  nodeRefList.forEach((el) => {
    el.uncheck_();
  });
};

defineExpose({
  check_,
  uncheck_,
});

onMounted(() => {});
</script>
<template>
  <div class="node-tree" :expanded="nodeExpand">
    <div class="title">
      <input
        type="checkbox"
        v-model="nodeChecked"
        @change="handleCheckStateChange_"
      />
      <div class="type-icon"></div>
      <div>{{ props.nodeData.title }}</div>
      <template v-if="props.nodeData.type === 'folder'">
        <div
          style="display: flex; align-items: center; margin-left: 0.5rem"
          @click="nodeExpand = !nodeExpand"
        >
          <svg-icon v-if="nodeExpand === false" name="arrow-up" size="0.8rem" />
          <svg-icon v-else name="arrow-down" size="0.8rem" />
        </div>
      </template>
    </div>
    <div class="nodes">
      <node-tree
        v-for="node in props.nodeData.children"
        :key="node"
        :nodeData="node"
        :ref="cacheNodeRefList_"
        @nodeChecked="handleNodeChecked_"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.node-tree {
  height: 100%;
  > .title {
    height: 1.6rem;
    display: flex;
    align-items: center;
    font-size: var(--van-font-size-md);
    input[type="checkbox"] {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }
  > .nodes {
    padding-left: 2rem;
  }
  &[expanded="false"] {
    height: 1.6rem;
    > .nodes {
      display: none;
    }
  }
}
</style>