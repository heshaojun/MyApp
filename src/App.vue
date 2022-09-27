<script setup>
import {ref} from "vue"
const viewCache = ref([])
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="viewCache">
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">

</style>
