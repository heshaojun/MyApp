<script setup>
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

const locationInfo = computed(() => store.state.home.locationInfo);
const actions = ref([{text:"退出站点"}]);
const showPopover = ref(false)
onMounted(() => {
  store.dispatch("home/fetchLocationInfo")
})
</script>
<template>
  <div class="head-bar">
    <div style="display:flex;align-items:center;font-size:var(--van-font-size-md);">
      <template v-if="locationInfo.state === 'notCheckIn'">
        <svg-icon name="location" size="1.2rem" color="var(--van-gray-5)" style="margin-right: 0.2rem"/>
        <div style="color: var(--van-gray-5)">没有检入任何电站</div>
      </template>
      <template v-else>
        <van-popover :actions="actions" v-model:show="showPopover">
          <template #reference>
            <div v-if="locationInfo.state === 'inside'" style="display:flex;align-items:center;">
              <svg-icon name="location" size="1.2rem" color="var(--van-primary-color)" style="margin-right: 0.2rem"/>
              <div style="color: var(--van-primary-color)">
                {{ locationInfo.location }}
              </div>
            </div>
            <div v-else-if="locationInfo.state === 'outside'" style="display:flex;align-items:center;">
              <svg-icon name="location" size="1.2rem" color="var(--van-warning-color)" style="margin-right: 0.2rem"/>
              <div style="color: var(--van-warning-color)">
                {{ locationInfo.location }}
              </div>
            </div>
          </template>
        </van-popover>
      </template>
    </div>
    <div style="display: flex;align-items: center">
      <svg-icon name="search" size="1.2rem" color="var(--van-gray-6)" style="margin-right: 1rem"/>
      <van-badge style="display: flex;align-items: center" :content="6" max="99" :offset="[-1,1]">
        <svg-icon name="msg" size="1.2rem" color="var(--van-gray-6)"/>
      </van-badge>
    </div>
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
