<template>
  <div class="login-view">
    <a-form :model="formRt" class="login-form" layout="vertical">
      <a-form-item label="用户名">
        <a-input v-model:value="formRt.username"/>
      </a-form-item>
      <a-form-item label="密码">
        <a-input-password v-model:value="formRt.password"></a-input-password>
      </a-form-item>
      <a-form-item label="验证码">
        <a-input v-model:value="formRt.code"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" block @click="loginAc">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import {reactive, toRaw} from 'vue'
import {useRouter} from 'vue-router'
import {useMyStore} from '@/store'

const myStore = useMyStore()

const {push} = useRouter()

const formRt = reactive({
  username: 'admin',
  password: '123456',
  code: '1234',
})

const loginAc = async () => {
  const params = toRaw(formRt)
  await myStore.loginAc(params)
  push({path:myStore.info.home})
}

</script>
<style scoped>
.login-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.login-form {
  width: 420px;
}
</style>