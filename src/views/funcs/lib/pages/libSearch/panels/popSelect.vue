<script setup>
import { ref } from "vue";
const emit = defineEmits();
const props = defineProps({
    options: Object,
    active: Object
});
const popupShow = ref(false);
const optionSelect_ = (option) => {
    emit("update:active", option)
}
</script>
<template>
    <div style="max-width:5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--van-primary-color)"
        @click="popupShow = true">
        {{props.active.text}}
    </div>
    <van-popup v-model:show="popupShow" position="bottom" round
        style="height:35%;display: flex;flex-direction: column;">
        <div style="padding-top: 0.5rem;">
            <van-cell>
                <template v-for="option in props.options" :key="option">
                    <div v-if="option.value == props.active.value"
                        style="border-bottom:1px solid var(--van-gray-3);padding: 0.4rem 1rem;display: flex;justify-content: space-between;align-items: center;color: var(--van-orange);"
                        @click="optionSelect_(option)">
                        <div>{{option.text}}</div>
                        <van-icon name="success" />
                    </div>
                    <div v-else
                        style="border-bottom:1px solid var(--van-gray-3);padding: 0.4rem 1rem;display: flex;justify-content: space-between;align-items: center;"
                        @click="optionSelect_(option)">
                        <div>{{option.text}}</div>
                    </div>
                </template>
            </van-cell>
        </div>
    </van-popup>
</template>

