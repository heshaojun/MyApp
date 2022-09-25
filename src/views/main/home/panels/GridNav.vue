<script setup>

</script>
<template>
  <div class="grid-nav">
    <van-grid column-num="4" square :border="false">
      <van-grid-item text="工作">
        <template #icon>
          <div class="grid-icon-item"
               style="background-color: #F28E38;"
          >
            <svg-icon name="work" size="1.4rem" color="#fff"/>
          </div>
        </template>
      </van-grid-item>
      <van-grid-item text="资料库">
        <template #icon>
          <div class="grid-icon-item"
               style="background-color: #FFA501;"
          >
            <svg-icon name="lib" size="1.4rem" color="#fff"/>
          </div>
        </template>
      </van-grid-item>
      <van-grid-item text="审批">
        <template #icon>
          <div class="grid-icon-item"
               style="background-color: #F28E38;"
          >
            <svg-icon name="approve_my_approve" size="1.4rem" color="#fff"/>
          </div>
        </template>
      </van-grid-item>
      <van-grid-item text="实验室">
        <template #icon>
          <div class="grid-icon-item"
               style="background-color: #E5A96B;"
          >
            <svg-icon name="lab" size="1.4rem" color="#fff"/>
          </div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<style lang="scss" scoped>
.grid-nav {
  width: 100%;

  .grid-icon-item {
    width: 2rem;
    height: 2rem;
    display: flex;
    color: #646566;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 4px;
  }
}
</style>
