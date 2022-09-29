<!-- 工作信息页面 -->
<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const active = ref(false);
const viewCache = ref([]);
onMounted(() => {
    switch (route.path) {
        case "/work":
            router.replace("/work/createByMe");
            break;
        case "/work/createByMe":
            active.value = 0;
            break;
        case "/work/handleByMe":
            active.value = 1;
            break;
        case "/work/checkByMe":
            active.value = 2;
            break;

    }
});
</script>
<template>
    <div class="work">
        <van-nav-bar title="工作" left-arrow left-text="返回" :placeholder="true" />
        <van-tabs :border="true" v-model:active="active" color="#70B603">
            <van-tab title="我创建的" to="/work/createByMe" />
            <van-tab title="我处理的" to="/work/handleByMe" />
            <van-tab title="我验收的" to="/work/checkByMe" />
        </van-tabs>
        <div style="flex:1;overflow: hidden">
            <div style="height:100%;overflow: auto;">
                <router-view v-slot="{ Component }">
                    <keep-alive :include="viewCache">
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.work {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
