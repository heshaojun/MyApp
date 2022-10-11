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
  { text: "删除", mark: "delete", disabled: false, icon: "close" },
]);
const fetchWorkInfo_ = () => {
  workInfo.value = {
    workName: "工作名称",
    workState: "waitForChecking",
    creatTime: "2022-01-01 22:34:11",
    workClasses: "inner",
    workStation: {
      stationName: "变电站名称",
      stationId: "变电站id",
    },
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

  if (workInfo.workState === "waitForHandling") {
    optionActions.value = [
      { text: "删除", mark: "delete", disabled: false, icon: "delete-o" },
    ];
  } else {
    optionActions.value = [
      { text: "删除", mark: "delete", disabled: true, icon: "delete-o" },
    ];
  }
});
</script>
<template>
  <div class="create-by-me">
    <van-nav-bar title="我创建的工作" left-arrow left-text="返回" @click-left="router.back()" :safe-area-inset-top="true">
      <template #right>
        <van-popover v-model:show="showOption" :actions="optionActions" placement="bottom-end" style="width: 6rem">
          <template #reference>
            <div style="color: var(--van-primary-color)">操作</div>
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <div style="flex: 1;overflow: hidden;">
      <div style="height:100%;overflow-y: auto;">
        <van-cell>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <div style="display: flex; align-items: center">
              <svg-icon name="work" size="1.2rem" color="var(--van-primary-color)" />
              <div style="margin-left: 1rem">{{ workInfo.workName }}</div>
            </div>
            <div>
              <span v-if="workInfo.workState === 'finished'" style="color: var(--van-gray-5)">已完成</span>
              <span v-else-if="workInfo.workState === 'waitForChecking'" style="color: var(--van-green)">待验收</span>
              <span v-else-if="workInfo.workState === 'waitForHandling'"
                style="color: var(--van-orange-dark)">待接受</span>
              <span v-else-if="workInfo.workState === 'handing'" style="color: var(--van-blue)">执行中</span>
            </div>
          </div>
        </van-cell>
        <div style="font-size: var(--van-font-size-md); margin: 0.4rem 1rem">工作内容</div>
        <van-cell>
          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">工作站点：</div>
            <div v-if="workInfo.workStation" style="flex: 1; text-align: center">
              {{ workInfo.workStation.stationName }}
            </div>
          </div>
          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">工作类型：</div>
            <div style="flex: 1; text-align: center">
              <span v-if="workInfo.workClasses === 'inner'">内部检修</span>
              <span v-else-if="workInfo.workClasses === 'outer'">外部检修</span>
            </div>
          </div>
          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">创建时间：</div>
            <div style="flex: 1; text-align: center">{{workInfo.creatTime}}</div>
          </div>

          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">验收人：</div>
            <div v-if="workInfo.workChecker" style="flex: 1; text-align: center">{{workInfo.workChecker.userName}}</div>
          </div>
          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">执行人：</div>
            <div v-if="workInfo.workHandler" style="flex: 1; text-align: center">{{workInfo.workHandler.userName}}</div>
          </div>
          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">计划开始时间：</div>
            <div v-if="workInfo.timeInPlan" style="flex: 1; text-align: center">{{workInfo.timeInPlan.startTime}}</div>
          </div>
          <div style="
          display: flex;
          border-bottom: 1px solid var(--van-gray-3);
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">计划完成时间：</div>
            <div v-if="workInfo.timeInPlan" style="flex: 1; text-align: center">{{workInfo.timeInPlan.endTime}}</div>
          </div>
          <div style="
          padding-bottom: 0.4rem;
          margin-top: 0.4rem;
        ">
            <div style="width: 7rem; color: var(--van-gray-6)">计划完成时间：</div>
            <div style="flex: 1;height: 5rem;overflow-y: auto;">{{workInfo.workContent}}</div>
          </div>
        </van-cell>
        <div style="font-size: var(--van-font-size-md); margin: 0.4rem 1rem">工作节点</div>
        <van-cell>
          <van-steps direction="vertical" active="-1">
            <van-step v-for="node in workInfo.workNodes" :key="node">
              <div style="display:flex;justify-content: space-between;align-items: center;">
                <div>
                  <div style="font-size:var(--van-font-size-lg)">{{node.nodeName}}</div>
                  <div style="margin-top:0.4rem">{{node.creatTime}}</div>
                </div>
                <div v-if="node.hashDetail" style="color:var(--van-primary-color)">
                  详情>>
                </div>
              </div>
            </van-step>
          </van-steps>
        </van-cell>
        <div style="font-size: var(--van-font-size-md); margin: 0.4rem 1rem" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.create-by-me {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
