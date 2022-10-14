<script setup name="newApprove">
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
    <div class="new-approve">
        <van-nav-bar right-text="取消" @click-right="router.back()" />
        <div style="flex: 1;overflow: hidden;">
            <div></div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.new-approve {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>