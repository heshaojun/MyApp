<!--工作信息面板-->
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const workList = computed(() => store.state.home.workList);
onMounted(() => {
  store.dispatch("home/fetchWorkList");
})
</script>
<template>
  <div class="work-notice">
    <div style="display:flex;justify-content:space-between;align-items: baseline;">
      <div style="font-weight:600;font-size:var(--van-font-size-md)">工作</div>
      <div style="font-size:var(--van-font-size-sm);color:var(--van-text-color-2)">更多>></div>
    </div>

    <template v-if="workList.length">
      <div style="width:100%;margin: 1rem 0 0.5rem 0;">
        <div v-for="item in workList" :key="item"
          style="display:flex;justify-content:space-between;color: var(--van-text-color-1);align-items: center;margin: 0.5rem auto;">
          <div>{{item.title}}</div>
          <div :style="{'color':item.color,'font-size':'var(--van-font-size-sm)'}">{{item.state}}</div>
        </div>
      </div>
    </template>
    <template v-else>
      <div style="width:100%;margin:1rem 0 0.5rem 0;text-align: center;color: var(--van-text-color-3);">没有工作数据</div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.work-notice {
  width: 100%;

}
</style>
