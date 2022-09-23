<script setup>
import { onMounted, getCurrentInstance, reactive, ref } from "vue";
const { proxy } = getCurrentInstance()
const componentHeght = ref()
onMounted(() => {
    let currentComponent = proxy.$refs['panel-carousel']
    componentHeght.value = currentComponent.clientWidth / 2 + "px"
})
</script>
<template>
    <div class="panel-carousel" ref="panel-carousel" :style="{'height':componentHeght}">
        
    </div>
</template>

<style lang="scss" scoped>
.panel-carousel {
    background-color: aqua;
}
</style>
