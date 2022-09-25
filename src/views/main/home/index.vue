<script setup>
import Carousel from "./panels/Carousel.vue"
import GridNav from "./panels/GridNav.vue";
import ApproveNotice from "./panels/ApproveNotice.vue"
import WorkNotice from "./panels/WorkNotice.vue"
import NewsList from "./panels/NewsList.vue"
</script>
<template>
  <div class="home">
    <div class="home-head van-safe-area-top">
      <div>fsdaf</div>
      <div>fsdaf</div>
    </div>
    <div class="home-content">
      <carousel/>
      <grid-nav/>
      <div class="home-panel-content">
        <approve-notice/>
      </div>
      <div class="home-panel-content">
        <work-notice/>
      </div>
      <div class="home-panel-content">
        <news-list/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-head {
    padding: 0 1rem;
    display: flex;
    height: 2.875rem;
    border-bottom: 1px solid var(--van-background-color-light);
    justify-content: space-between;
    align-items: center;
  }

  .home-content {
    flex: 1;
    background-color: var(--van-background-color);
    overflow: auto;

    .home-panel-content {
      background-color: white;
      margin-top: 0.4rem;
      font-size: var(--van-font-size-md);
      color: var(--van-text-color);
      padding: 0.5rem 1rem;
    }
  }
}
</style>
