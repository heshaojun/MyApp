<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const locationInfo = computed(() => store.state.home.locationInfo)
onMounted(() => {
    store.dispatch("home/fetchLocationInfo")
})
</script>
<template>
    <div class="head-bar">
        <div style="display:flex;align-items:center;">
            <template v-if="locationInfo.state === 'noCheckIn'">
                <svg-icon name="location" size="1.2rem"/>
                <div>没有检入任何电站</div>
            </template>
            <template v-else>
                <svg-icon name="location" size="1.2rem"/>
                <div>{{locationInfo.location}}</div>
            </template>
        </div>
        <div>搜索图标</div>
    </div>
</template>
<style lang="scss" scoped>
.head-bar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--van-font-size-md);
}
</style>
