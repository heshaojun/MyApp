<script setup name="launchByMe">
import { ref } from "vue";
//列表加载状态
const listLoading = ref(false);
//列表数据加载完成状态
const finishedLoad = ref(false);
//列表数据
const listData = ref([])
//加载数据方法
const loadData_ = () => {

}
</script>
<template>
    <div class="launch-by-me">
        <van-list v-model:loading="listLoading" :finished="finishedLoad" @load="loadData_()">

        </van-list>
    </div>
</template>
<style lang="scss" scoped>
.launch-by-me {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>