<script setup>
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const libId = route.query["libId"];
const libName = route.query["libName"];
const docList = ref([
  {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "area",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  },
  {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "area",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  },
  {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "folder",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  },
  {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  }, {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  }, {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  }, {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  }, {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  }, {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  }, {
    docId: "fdafdasfdsa",
    docName: "330kv控制室",
    type: "doc",
    docType: "pdf",
    docSummary: "文档简介",
    uploader: "上传人",
    updateTime: "2022-01-01",
  },
])
const handleDocClick_ = (doc) => {
  console.log(doc)
}
</script>
<template>
  <div class="lib-list">
    <van-nav-bar :title="libName" left-arrow left-text="返回" @click-left="router.back()" @click-right="
      router.push({ path: '/libSearch', query: { libId: libId } })
    " :safe-area-inset-top="true">
      <template #right>
        <svg-icon name="search" size="1rem" color="var(--van-primary-color)" />
      </template>
    </van-nav-bar>
    <div
      style="padding: 0.5rem 1rem;background-color: #ffff;font-size:var(--van-font-size-md);display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid var(--van-gray-4);border-top: 1px solid var(--van-gray-4);">
      <div style="flex:1;display: flex;align-items: center;">
        <span>位置：</span>
        <span> / fdsaf </span>
        <span> / fdsaf </span>
      </div>
      <div>
        <svg-icon name="back" size="1rem" />
      </div>
    </div>
    <div style="flex: 1;overflow: hidden;">
      <div style="height:100%;width:100%;overflow-y:auto">
        <van-cell :border="false">
          <div v-for="doc in docList" :key="doc" style="display:flex;align-items:center;margin-bottom: 0.5rem;"
            @click="handleDocClick_(doc)">
            <div style="margin-right:  0.6rem;">
              <template v-if="doc.type === 'area'">
                <svg-icon name="area_device" size="2.5rem" color="var(--van-orange-dark)" />
              </template>
              <template v-else-if="doc.type === 'folder'">
                <svg-icon name="folder" size="2.5rem" color="var(--van-orange-dark)" />
              </template>
              <template v-else-if="doc.type === 'doc'">
                <svg-icon :name="'file_'+doc.docType" size="2.5rem" />
              </template>
            </div>
            <div style="flex:1;border-bottom: 1px solid var(--van-gray-4);">
              <div style="font-weight: 600;">{{doc.docName}}</div>
              <div style="font-size:var(--van-font-size-sm);color:var(--van-gray-5);">{{doc.docSummary}}</div>
              <div style="font-size:var(--van-font-size-xs);display: flex;justify-content: space-between;">
                <div>更新时间：{{doc.updateTime}}</div>
                <div>上传者：{{doc.uploader}}</div>
              </div>
            </div>
          </div>
        </van-cell>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.lib-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>