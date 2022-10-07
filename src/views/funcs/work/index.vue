<!-- 工作信息页面 -->
<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import createByMe from "./panels/createByMe.vue";
import handleByMe from "./panels/handleByMe.vue";
import checkByMe from "./panels/checkByMe.vue";
const route = useRoute();
const router = useRouter();
const active = ref(0);
onMounted(() => {
  console.log("工作页面加载");
});
</script>
<template>
  <div class="work">
    <van-nav-bar
      title="工作"
      left-arrow
      left-text="返回"
      :placeholder="true"
      @click-left="router.back()"
      right-text="新建"
      @click-right="router.push('/addNewWork')"
    />
    <van-tabs :border="true" v-model:active="active" color="#70B603">
      <van-tab title="我创建的" />
      <van-tab title="我处理的" />
      <van-tab title="我验收的" />
    </van-tabs>
    <div style="flex: 1; overflow: hidden">
      <div style="height: 100%; overflow: auto">
        <create-by-me v-show="active === 0" />
        <handle-by-me v-show="active === 1" />
        <check-by-me v-show="active === 2" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.work {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
