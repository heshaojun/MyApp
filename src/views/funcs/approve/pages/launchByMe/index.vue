<script setup name="launchByMe">
import { onMounted, ref } from "vue";
//列表加载状态
const listLoading = ref(false);
//列表数据加载完成状态
const finishedLoad = ref(false);
//列表数据
const approveList = ref([])
//加载数据方法
const loadData_ = () => {
    listLoading.value = true;
    for (let i = 0; i < 10; i++) {
        approveList.value.push(Math.random())
    }
    setTimeout(() => { listLoading.value = false }, 1000);
    if (approveList.value.length > 20) {
        finishedLoad.value = true
    }
};
onMounted(() => {
    loadData_();
})
</script>
<template>
    <div class="launch-by-me">
        <van-list :loading="listLoading" :finished="finishedLoad" @load="loadData_()">
            <van-cell v-for="approve in approveList" :key="approve">
                <div style="display:flex;align-items:center;width: 100%;">
                    <svg-icon name="approve" size="2.4rem" color="var(--van-gray-6)" />
                    <div style="flex:1;margin-left:0.5rem;overflow: hidden;">
                        <div style="display:flex;justify-content:space-between;align-items: center;">
                            <div class="van-ellipsis" style="width: 12rem;font-weight: 600;">
                                名称-某某审批名称-某某审批名称-某某审批名称-某某审批</div>
                            <div style="font-size:var(--van-font-size-xs);color: var(--van-gray-5);">
                                <span>入站申请</span>
                            </div>
                            <div style="font-size:var(--van-font-size-xs)">
                                <span style="color:var(--van-warning-color)">待审批</span>
                            </div>
                        </div>
                        <div
                            style="color:var(--van-gray-6);font-size:var(--van-font-size-md);width: 100%;overflow: hidden;">
                            <div class="van-ellipsis">申请2222-234324,进入xxbian 变电站申请2222-234324,进入xxbian
                                变电站申请2222-234324,进入xxbian 变电站</div>
                        </div>
                        <div
                            style="display:flex;align-items:center;font-size: var(--van-font-size-xs);align-items: center;">
                            <div style="width:50%">审批人：zcvzv</div>
                            <div>创建时间：fasdfdsa</div>
                        </div>
                    </div>

                </div>
            </van-cell>
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