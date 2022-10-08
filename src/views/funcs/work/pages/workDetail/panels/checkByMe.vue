<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  workId: String,
});
const router = useRouter();
const workInfo = ref({});
const showOption = ref(false);
const optionActions = ref([
  { text: "验收", mark: "accept", disabled: false, icon: "passed" },
  { text: "退回", mark: "reject", disabled: true, icon: "close" },
]);
const fetchWorkInfo_ = () => {
  workInfo.value = {
    workName: "工作名称",
    workState: "工作状态",
    //工作创建者信息
    workCreater: {
      userId: "用户id",
      userName: "用户名称",
    },
    //执行者信息
    workHandler: {
      userId: "用户Id",
      userName: "用户名称",
    },
    //验收者信息
    workChecker: {
      userId: "用户Id",
      userName: "用户名称",
    },
    //计划时间
    timeInPlan: {
      startTime: "计划开始时间",
      endTime: "计划截至时间",
    },
    //实际时间
    timeInActual: {
      startTime: "实际开始时间",
      finishTime: "时间完成时间",
    },
    workContent: "工作内容描述",
    workNodes: [
      {
        nodeId: "工作节点id",
        nodeName: "工作节点名称",
        creatTime: "节点创建时间",
        hashDetail: false,
      },
      {
        nodeId: "工作节点id",
        nodeName: "工作节点名称",
        creatTime: "节点创建时间",
        hashDetail: false,
      },
      {
        nodeId: "工作节点id",
        nodeName: "工作节点名称",
        creatTime: "节点创建时间",
        hashDetail: true,
      },
      {
        nodeId: "工作节点id",
        nodeName: "工作节点名称",
        creatTime: "节点创建时间",
        hashDetail: true,
      },
    ],
  };
};
onMounted(() => {
  fetchWorkInfo_();
});
</script>
<template>
  <div class="check-by-me">
    <van-nav-bar
      title="我验收的工作"
      left-arrow
      @click-left="router.back()"
      :safe-area-inset-top="true"
      :placeholder="true"
    >
      <template #right>
        <van-popover
          v-model:show="showOption"
          :actions="optionActions"
          placement="bottom-end"
          style="width: 6rem"
        >
          <template #reference>
            <div style="color: var(--van-primary-color)">操作</div>
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <van-cell>
      <div style="display: flex; align-items: center; justify-content: space-between">
        <div style="display: flex; align-items: center">
          <svg-icon name="work" size="1.2rem" color="var(--van-primary-color)" />
          <div style="margin-left: 1rem">{{ workInfo.workName }}</div>
        </div>
        <div>fds</div>
      </div>
    </van-cell>
  </div>
</template>
<style lang="scss" scoped>
.check-by-me {
  width: 100%;
  height: 100%;
}
</style>
