<script lang="ts" setup>
import { reactive } from "vue"
import { useLogin } from "../composables/useLogin"
import { useLoginStore } from "../stores/login"
import { LoginPayload } from "../types/login"
import { message } from "ant-design-vue"

const { startLogin } = useLogin()
const store = useLoginStore()

interface FormState {
  email: string;
  password: string;
}

const formState = reactive<FormState>({
  email: '',
  password: '',
})

const onFinish = (values: FormState) => {
  message.info("Logging in")
  startLogin(values as unknown as LoginPayload)
}
</script>

<template>
  <a-form
    :model="formState"
    name="loginForm"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input type="email" v-model:value="formState.email" />
    </a-form-item>
    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!'}]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button
        type="primary"
        html-type="submit"
        :loading="store.loading"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>
