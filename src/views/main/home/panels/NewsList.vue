<script setup>
import {computed, onMounted, getCurrentInstance, ref} from 'vue';
import {useStore} from 'vuex';

const store = useStore();
const {proxy} = getCurrentInstance();
const newsList = computed(() => store.state.home.newsList);
const fixedWidth = ref(window.clientWidth);
onMounted(() => {
  store.dispatch("home/fetchNewsList");
  fixedWidth.value = proxy.$refs["news-list"].clientWidth
})
</script>
<template>
  <div class="news-list" ref="news-list">
    <div style="display:flex;justify-content:space-between;align-items: baseline;">
      <div style="font-weight:600;font-size:var(--van-font-size-md)">资讯</div>
      <div style="font-size:var(--van-font-size-sm);color:var(--van-text-color-2)">更多>></div>
    </div>
    <template v-if="newsList.length">
      <div style="margin-top: 1rem">
        <div v-for="item in newsList" :key="item" style="margin: 1rem 0 0.5rem 0">
          <!--          资讯子项头部标题-->
          <div style="margin-bottom: 0.5rem">{{ item.title }}</div>
          <!--          资讯图片-只展示图片数量为1 和3的资讯图片-->
          <van-image v-if="item.imgs.length === 1" :width="fixedWidth" :height="fixedWidth/2"/>
          <div v-else-if="item.imgs.length === 3" style="display: flex;justify-content: space-between">
            <van-image v-for="img in item.imgs" :key="img" :width="(fixedWidth-10)/3" :height="(fixedWidth-10)/3"/>
          </div>
          <!--          资讯子项底部信息-->
          <div
              style="display: flex;color: var(--van-text-color-2);font-size: var(--van-font-size-sm);padding: 0.3rem 0 0.3rem 0;border-bottom: 1px solid var(--van-border-color)">
            <div style="width: 50%">来源：{{ item.source }}</div>
            <div>发布时间：{{ item.publisTime }}</div>
          </div>
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
