<script setup name="borrowApply">
import { useRouter } from "vue-router";
import { reactive, ref, getCurrentInstance, onMounted } from "vue";
import treePanel from "./panels/treePanel.vue";

const { proxy } = getCurrentInstance();
const treeData = ref([
  {
    title: "目录1", id: "1", type: "folder", children: [
      {
        title: "目录11", id: "11", type: "folder", children: [
          { title: "目录111", id: "111", type: "doc" },
          { title: "目录112", id: "112", type: "doc" },
        ]
      },
      { title: "目录12", id: "12", type: "doc" },
      { title: "目录13", id: "13", type: "doc" },
    ]
  },
  { title: "目录2", id: "2", type: "folder" },
  { title: "目录3", id: "3", type: "doc" },
]);

const formData = reactive({
  stationName: null,
  staionId: null,
});

const router = useRouter();
onMounted(() => {
  console.log(treeData);
});
</script>
<template>
  <div class="borrow-apply">
    <van-nav-bar title="资料借阅申请" right-text="取消" @click-right="router.back()" />
    <div style="flex: 1; overflow: hidden">
      <van-form style="display: flex; flex-direction: column; height: 100%">
        <van-field label="站点" v-model="formData.stationName" is-link placeholder="借阅资料的站点" required readonly
          :rules="[{ required: true, message: '请选择要借阅资料的站点' }]" />
        <div style="padding: 0.5rem 1rem; font-size: var(--van-font-size-md)">
          选择借阅的资料
        </div>
        <div style="flex: 1; overflow: hidden">
          <div style="
              height: 100%;
              width: 100%;
              padding: 0 1rem;
              overflow-y: auto;
              background-color: White;
            ">
            <id ref="tree1" @click="alert('oo')">fsdafs</id>
            <tree-panel v-for="node in treeData" :key="node" :node-data="node" :ref="'1tree' + node.id">
            </tree-panel>


          </div>
        </div>
        <div style="margin: 0.5rem 1rem">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.borrow-apply {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  dl,
  dt,
  dd {
    padding: 0;
  }
}
</style>