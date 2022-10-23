<script setup>
</script>
<template>
  <div class="mine">
    <van-nav-bar title="我的信息" :placeholder="true">
      <template #right>
        <van-badge
          style="display: flex; align-items: center"
          :content="6"
          max="99"
          :offset="[-1, 1]"
        >
          <svg-icon name="msg" size="1.2rem" color="var(--van-gray-6)" />
        </van-badge>
      </template>
    </van-nav-bar>
    <div style="flex: 1; overflow: hidden">
      <div
        style="width: 100%; height: 100%; overflow-x: hidden; overflow-y: auto"
      >
        <van-cell>
          <div></div>
        </van-cell>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mine {
  widows: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>