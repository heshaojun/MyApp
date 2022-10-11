<!-- 资料库页面 -->
<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const innerLibList = computed(() => store.state.lib.innerLibList);
const checkedOuterLib = computed(() => store.state.lib.checkedOuterLib);

onMounted(() => {
    store.dispatch("lib/fetchInnerLibList");
    store.dispatch("lib/fethcCheckedOuterLib");
})

</script>
<template>
    <div class="lib" style="display:flex;flex-direction:column">
        <van-nav-bar title="资料库" left-arrow left-text="返回" @click-left="router.back()">
        </van-nav-bar>
        <div style="flex:1;overflow: hidden;color: var(--van-gray-6);font-size: var(--van-font-size-lg);">
            <div style="height:100%;overflow-y: auto;">
                <div style="margin:0.5rem 1rem">内部资料</div>
                <van-cell-group :border="true">
                    <template v-if="innerLibList.length > 0">
                        <van-cell v-for="item in innerLibList" :key="item"
                            @click="router.push({path:'/libList',query:{libId:item.libId,libName:item.libName}})">
                            <div style="display:flex;justify-content: space-between;">
                                <div style="display:flex">
                                    <svg-icon name="lib" size="1.5rem" color="#57C2F5" />
                                    <div style="margin-left:1rem">
                                        {{item.libName}}
                                    </div>
                                </div>
                                <div style="color:var(--van-primary-color)">>></div>
                            </div>
                        </van-cell>
                    </template>
                    <van-cell v-else>
                        <div style="color:var(--van-gray-5)">没有内部资料库数据</div>
                    </van-cell>
                </van-cell-group>
                <div style="margin:0.5rem 1rem">外部资料</div>
                <van-cell v-if="checkedOutLib"
                    @click="router.push({path:'/libList',query:{libId:checkedOutLib.libId,libName:checkedOutLib.libName}})">
                    <div style="display:flex;justify-content: space-between;">
                        <div style="display:flex">
                            <svg-icon name="lib" size="1.5rem" color="#57C2F5" />
                            <div style="margin-left:1rem">
                                {{item.libName}}
                            </div>
                        </div>
                        <div style="color:var(--van-primary-color)">>></div>
                    </div>
                </van-cell>
                <van-cell v-else>
                    <div style="color:var(--van-gray-5)">没有内部资料库数据</div>
                </van-cell>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.lib {
    width: 100%;
    height: 100%;
}
</style>
