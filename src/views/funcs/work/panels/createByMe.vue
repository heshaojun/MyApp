<!-- 我创建的工作 -->
<script setup>
    import { ref, reactive, onMounted } from "vue";
    import { useStore } from "vuex";
    const store = useStore();
    //下拉刷新状态
    const refreshing = ref(false);
    //数据加载状态
    const loading = ref(false);
    //数据加载完成（服务器分页没有数据了）
    const finished = ref(false);
    //分页拉取数据的页码
    const listPage = reactive({ page: 1, pageSize: 10 });
    const createByMeList = ref([])
    //拉取数据
    const onload_ = () => {
        loading.value = true;
        for (let i = 0; i < 6; i++) {
            createByMeList.value.push(Math.random());
        }
        loading.value = false;
        refreshing.value = false;
    }
    //下拉刷新
    const onRefresh_ = () => {
        refreshing.value = true
        listPage.page = 1;
        listPage.pageSize = 10;
        createByMeList.value = []
        onload_();
    }
    onMounted(() => {
        console.log("fdsafdsafdsafds");
        onRefresh_();
    })
    </script>
    <template>
        <div class="create-by-me">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh_">
                <van-list v-model:loading="loading" @load="onload_" finished-text="没有更多数据了">
                    <van-cell v-for="item in createByMeList" :key="item">
                        <template #default>
                            <div style="display:flex;justify-content:space-between;align-items: center;">
                                <div style="flex:1;margin-right: 0.5rem;">
                                    <div style="display:flex;justify-content:space-between;align-items: flex-end;">
                                        <div>任务名称</div>
                                        <div style="font-size:var(--van-font-size-sm);margin-right: 1rem;">任务状态</div>
                                    </div>
                                    <div style="color:var(--van-gray-5);font-size:var(--van-font-size-sm)">
                                        任务内容摘要任务内容摘要任务内容摘要任务内容摘要任务内容摘要任务内容摘要...</div>
                                    <div
                                        style="display:flex;align-items: baseline;font-size: var(--van-font-size-xs);color: var(--van-gray-7);">
                                        <div style="width:50%">执行人：某某某某</div>
                                        <div>创建时间：2022-01-01</div>
                                    </div>
                                </div>
                                <svg-icon name="right" size="1.5rem" color="var(--van-gray-5)" />
                            </div>
                        </template>
                    </van-cell>
                </van-list>
            </van-pull-refresh>
        </div>
    </template>
    <style lang="scss" scoped>
    .create-by-me {
        width: 100%;
    
        .van-cell {
            &:hover {
                background-color: var(--van-gray-1);
            }
        }
    }
    </style>
        