<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import popSelect from "./panels/popSelect.vue"
const router = useRouter();
const route = useRoute();
const libId = route.query["libId"];

const activeOption = ref({
  text: "变电站1", value: "11111"
});
const optionList = ref([{
  text: "变电站1", value: "11111"
}, { text: "变电站2", value: "11221" }])
onMounted(() => { });
</script>
<template>
  <div class="lib-search">
    <div style="
        width: 100%;
        background-color: #ffffff;
        font-size: var(--van-font-size-md);
      ">
      <div style="display: flex; align-items: center; height: 3rem;margin: auto 1rem;">
        <div style="font-size:var(--van-font-size-sm);padding-right: 0.8rem;">
          <pop-select v-model:active="activeOption" :options="optionList" />
        </div>
        <div style="flex:1;display: flex;align-items: center;">
          <input type="text"
            style="flex:1;display: block;height: 1.8rem;border: none;background-color: var(--van-gray-3);border-radius: 0.2rem;padding-left: 1rem;"
            placeholder="输入查询的内容" />
          <div style="padding-left:0.8rem;color: var(--van-primary-color);">取消</div>
        </div>
      </div>
    </div>
    <div style="flex: 1;overflow: hidden;">
      <div style="height:100%;overflow-y: auto;">

      </div>
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

