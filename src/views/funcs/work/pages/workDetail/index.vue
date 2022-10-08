<script setup name="workDetail">
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import checkByMe from "./panels/checkByMe.vue";
import handleByMe from "./panels/handleByMe.vue";
import createByMe from "./panels/createByMe.vue";

const route = useRoute();
const workId = route.query["workId"];
const workType = route.query["workType"];

onMounted(() => {});
</script>
<template>
  <div class="work-detail">
    <check-by-me v-if="workType == 'checkByMe'" :work-id="workId" />
    <handle-by-me v-else-if="workType == 'handleByMe'" :work-id="workId" />
    <create-by-me v-else-if="workType == 'createByMe'" :work-id="workId" />
  </div>
</template>
<style lang="scss" scoped>
.work-detail {
  width: 100%;
  height: 100%;
}
</style>
