<script setup name="borrowApply">
import { useRouter } from "vue-router";
import { reactive, ref, getCurrentInstance, onMounted } from "vue";
import docOptions from "./panels/docOptions.vue";

const { proxy } = getCurrentInstance();

const formData = reactive({
  stationName: null,
  staionId: null,
  docIds: [],
});

const router = useRouter();
onMounted(() => {});
</script>
<template>
  <div class="borrow-apply">
    <van-nav-bar
      title="资料借阅申请"
      right-text="取消"
      @click-right="router.back()"
    />
    <div style="flex: 1; overflow: hidden">
      <van-form style="display: flex; flex-direction: column; height: 100%">
        <van-field
          label="站点"
          v-model="formData.stationName"
          is-link
          placeholder="借阅资料的站点"
          required
          readonly
          :rules="[{ required: true, message: '请选择要借阅资料的站点' }]"
        />
        <div style="padding: 0.5rem 1rem; font-size: var(--van-font-size-md)">
          选择借阅的资料
          <span style="font-size: var(--van-font-size-sm)"
            >（选中{{ formData.docIds.length }}个文档）</span
          >
        </div>
        <div style="flex: 1; overflow: hidden">
          <div
            style="
              height: 100%;
              width: 100%;
              overflow-y: auto;
              overflow-x: hidden;
              background-color: White;
            "
          >
            <div
              style="margin-left: 1rem; margin-right: 1rem; overflow-x: auto"
            >
              <template v-if="formData.staionId">
                <doc-options
                  :staionId="formData.staionId"
                  v-model:selectedDocs="formData.docIds"
                />
              </template>
              <template v-else>
                <van-empty description="请选择站点" />
              </template>
            </div>
          </div>
        </div>
        <div style="margin: 0.5rem 1rem">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.borrow-apply {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  dl,
  dt,
  dd {
    padding: 0;
  }
}
</style>