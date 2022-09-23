<script setup>
import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue';
const router = useRouter();
//登录接口表单
const loginForm = reactive({
  phone: ""
})
//验证码图片
const verifyCodeImgRef = ref()
//登录操作
const _doLogin = () => {

}
//获取验证码
const _fetchVerifyCodeImg = () => {

}

onMounted(() => {
  _fetchVerifyCodeImg()
})
</script>

<template>
  <div class="login">
    <van-nav-bar title="登 录" :fixed="true" :placeholder="true"></van-nav-bar>
    <van-cell>
      <van-cell>
        <div
          style="font-size:1.2rem;font-weight: var(--van-font-weight-bold);margin-top: 10vw;margin-bottom: 15vw;color: var(--van-text-color);;">
          欢迎使用云资料app</div>
        <van-form>
          <van-field v-model="loginForm.phone" label="手机号：" placeholder="请输入注册的手机号" required type="tel" size="large"
            :rules="[
              { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' },
            ]" />
          <van-field v-model="loginForm.verifyCode" label="验证码：" placeholder="请输入验证码" required type="text" size="large"
            :rules="[
              { pattern: /[0-9a-zA-Z]{1,10}/, message: '请输入正确的验证码' },
            ]">
            <template #extra>
              <van-image style="margin: -12px 0; height: 36px; width: 90px" :src="verifyCodeImgRef"
                @click="_fetchVerifyCodeImg" />
            </template>
          </van-field>
          <van-field v-model="loginForm.password" label="密码：" placeholder="请输入密码" required type="password" size="large"
            :rules="[
              {
                pattern: /[\u0000-\u00ff]{6,100}/,
                message: '请输入正确的密码',
              },
            ]" />
          <van-row justify="end">
            <van-col style="color: var(--van-gray-6);font-size: var(--van-font-size-md)">忘记密码？
            </van-col>
          </van-row>
          <div style="margin: 10vw 0 2vw 0">
            <van-button round block type="primary" native-type="submit">
              登 录
            </van-button>
          </div>
        </van-form>
      </van-cell>
      <van-row justify="center">
        <van-col @click="router.push('/register')">没有账号？立即注册>></van-col>
      </van-row>
    </van-cell>
  </div>
</template>
<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;

  .van-field {
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid var(--van-gray-5);
  }

  .van-col {
    font-size: var(--van-font-size-md);
    color: var(--van-primary-color);
  }
}
</style>