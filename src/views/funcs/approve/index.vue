<!-- 审批信息页面 -->
<script setup name="approve">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const tabActive = ref(0);

const popoverSelected_ = (action) => {
  switch (action.applyType) {
    case "borrowApply":
      router.push("/borrowApply");
      break;
  }
};

const showPopover = ref(false);
const popoverActions = ref([
  { text: "入站申请", applyType: "entryApply", disabled: true },
  { text: "借阅申请", applyType: "borrowApply", disabled: false },
]);
onMounted(() => {
  //判断当前路径，防止不调转指定tab页面
  switch (route.path) {
    case "/approve":
      router.replace("/approve/launchByMe");
      break;
    case "/approve/launchByMe":
      tabActive.value = 0;
      break;
    case "/approve/approveByMe":
      tabActive.value = 1;
      break;
  }
});
</script>
<template>
  <div class="approve">
    <van-nav-bar
      title="审批"
      left-arrow
      left-text="返回"
      @click-left="router.back()"
      :safe-area-inset-top="true"
      :placeholder="true"
    >
      <template #right>
        <van-popover
          v-model:show="showPopover"
          placement="bottom-end"
          :actions="popoverActions"
          @select="popoverSelected_"
        >
          <template #reference>
            <div style="color: var(--van-primary-color)">发起</div>
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <van-tabs v-model:active="tabActive" :border="true">
      <van-tab title="我发起的" to="/approve/launchByMe" :replace="true" />
      <van-tab title="我审批的" to="/approve/approveByMe" :replace="true" />
    </van-tabs>
    <div style="flex: 1; overflow: hidden">
      <div style="width: 100%; height: 100%">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.approve {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
