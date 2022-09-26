<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const newsList = computed(() => store.state.home.newsList);
onMounted(() => {
  store.dispatch("home/fetchNewsList");
})
</script>
<template>
  <div class="news-list">
    <div style="display:flex;justify-content:space-between;align-items: baseline;">
      <div style="font-weight:600;font-size:var(--van-font-size-md)">资讯</div>
      <div style="font-size:var(--van-font-size-sm);color:var(--van-text-color-2)">更多>></div>
    </div>
    <template v-if="newsList.length">
      <div style="margin: 1rem 0 0.5rem 0">
        <div v-for="item in newsList" :key="item">
          <div>{{item.title}}</div>
        </div>
      </div>
    </template>
    <template v-else>
      <div style="width:100%;margin:1rem 0 0.5rem 0;text-align: center;color: var(--van-text-color-3);">没有资讯数据</div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.news-list {
  width: 100%;
}
</style>
