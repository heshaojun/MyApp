<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();
const route = useRoute();
const libId = route.query("libId");

onMounted(() => { })
</script>
<template>
    <div class="lib-search">
        <div style="width:100%;background-color: #FFFFFF;padding: 0.2rem 1rem;">
            <div style="display:flex;align-items: center;">
                <div>
                    
                </div>
                <div style="flex:1">
                    搜索框
                </div>
                <div>
                    按钮
                </div>
            </div>
        </div>
        <div style="flex:1">
            fdafsd
        </div>
    </div>
</template>
<style lang="scss" scoped>
.lib-search {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>

