<!-- 审批信息页面 -->
<script setup name="approve">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const tabActive = ref(0);
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
    <van-nav-bar title="审批" left-arrow left-text="返回" @click-left="router.back()" right-text="新建"
      @click-right="router.push('/newApprove')" :safe-area-inset-top="true" :placeholder="true" />
    <van-tabs v-model:active="tabActive">
      <van-tab title="我发起的" to="/approve/launchByMe" />
      <van-tab title="我审批的" to="/approve/approveByMe" />
    </van-tabs>
    <div style="flex:1;overflow: hidden;">
      <div style="width:100%;height: 100%;">
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
