<script setup>
import { ref } from "vue"
const tabBarActive = ref()
</script>
<template>
    <div class="main">
        <router-view />
        <van-tabbar v-model="tabBarActive" :placeholder="false" :safe-area-inset-bottom="true" route>
            <van-tabbar-item to="/main/home" :replace="true">
                <span>首页</span>
                <template #icon="props">
                    <div style="display: flex;justify-content: center; align-items: center;">
                        <svg-icon name="home" :color="props.active? 'var(--van-primary-color)':'var(--van-gray-7)'"
                            size="1.4rem" />
                    </div>
                </template>
            </van-tabbar-item>
            <van-tabbar-item style="color:#F28E38">
                <span>扫一扫</span>
                <template #icon>
                    <div style="display: flex;justify-content: center; align-items: center;">
                        <svg-icon name="scan" color="#F28E38" size="1.8rem" />
                    </div>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/main/mine" :replace="true">
                <span>我的</span>
                <template #icon="props">
                    <div style="display: flex;justify-content: center; align-items: center;">
                        <svg-icon name="mine" :color="props.active? 'var(--van-primary-color)':'var(--van-gray-7)'"
                            size="1.4rem" />
                    </div>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
}
</style>
