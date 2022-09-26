<!--审批信息面板-->
<script setup>
import { computed, onMounted } from "vue"
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const approveList = computed(() => store.state.home.approveList);
onMounted(() => {
  store.dispatch("home/fetchApproveList");
})
</script>
<template>
  <div class="approve-notice">
    <div style="display:flex;justify-content:space-between;align-items: baseline;">
      <div style="font-weight:600;font-size:var(--van-font-size-md)">审批</div>
      <div style="font-size:var(--van-font-size-sm);color:var(--van-text-color-2)">更多>></div>
    </div>

    <template v-if="approveList.length">
      <div style="width:100%;margin: 1rem 0 0.5rem 0;">
        <div v-for="item in approveList" :key="item"
          style="display:flex;justify-content:space-between;color: var(--van-text-color-1);align-items: center;margin: 0.5rem auto;">
          <div>{{item.title}}</div>
          <div :style="{'color':item.color,'font-size':'var(--van-font-size-sm)'}">{{item.state}}</div>
        </div>
      </div>
    </template>
    <template v-else>
      <div style="width:100%;margin:1rem 0 0.5rem 0;text-align: center;color: var(--van-text-color-3);">没有审批数据</div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.approve-notice {
  width: 100%;
}
</style>
