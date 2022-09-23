<script setup>
import Carousel from "./panels/Carousel.vue"
</script>
<template>
    <div class="home">
        <div class="home-head van-safe-area-top">
            <div>fsdaf</div>
            <div>fsdaf</div>
        </div>
        <div class="home-content">
            <carousel />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .home-head {
        padding: 0 1rem;
        display: flex;
        height: 2.875rem;
        border-bottom: 1px solid var(--van-background-color-light);
        justify-content: space-between;
        align-items: center;
    }

    .home-content {
        flex: 1;
        background-color: var(--van-background-color);
        overflow: auto;
    }
}
</style>
