<script setup name="borrowApply">
import { useRouter } from "vue-router";
import { reactive } from "vue";

const formData = reactive({
    stationName: null,
    staionId: null
});


const router = useRouter();
</script>
<template>
    <div class="borrow-apply">
        <van-nav-bar title="资料借阅申请" right-text="取消" @click-right="router.back()" />
        <div style="flex:1;overflow:hidden">
            <van-form style="display:flex;flex-direction:column;height:100%">
                <van-field label="站点" v-model="formData.stationName" is-link placeholder="借阅资料的站点" required readonly
                    :rules="[{required:true,message:'请选择要借阅资料的站点'}]" />
                <div style="padding:0.5rem 1rem;font-size:var(--van-font-size-md)">选择借阅的资料</div>
                <div style="flex:1;overflow:hidden;">
                    <div style="height:100%;width:100%;padding:0 1rem;overflow-y:auto;background-color:White">
                        <dl>
                            <dt>Coffee</dt>
                            <dd>Black hot drink</dd>
                            <dd>
                                <dl>
                                    <dt>Coffee</dt>
                                    <dd>Black hot drink</dd>
                                    <dt>Milk</dt>
                                    <dd>White cold drink</dd>
                                    <dd>
                                        <dl>
                                            <dt>Coffee</dt>
                                            <dd>Black hot drink</dd>
                                            <dd>Black hot drink</dd>
                                            <dd>Black hot drink</dd>
                                            <dt>Milk</dt>
                                            <dd>White cold drink</dd>
                                        </dl>
                                    </dd>
                                </dl>
                            </dd>
                            <dt>Milk</dt>
                            <dd>White cold drink</dd>
                        </dl>
                    </div>
                </div>
                <div style="margin: 0.5rem 1rem;">
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
}
</style>