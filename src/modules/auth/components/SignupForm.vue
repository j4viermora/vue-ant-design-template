<script setup lang="ts">
import { reactive } from 'vue'
import { message } from 'ant-design-vue'

interface FormState {
  name: string;
  lastname: string;
  phoneNumber: string;
  email: string;
}

const formState = reactive<FormState>({
  name: '',
  lastname: '',
  phoneNumber: '',
  email: '',
})

const onFinish = (values: FormState) => {
  message.info('Sending request')
  console.log('values', values)
}
</script>

<template>
  <a-form
    :model="formState"
    name="signupForm"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email' }]"
    >
      <a-input type="email" v-model:value="formState.email" />
    </a-form-item>
    <a-form-item
      label="Name"
      name="name"
      :rules="[{ required: true, message: 'Please input your name' }]"
    >
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item
      label="Lastname"
      name="lastname"
      :rules="[{ required: true, message: 'Please input your last name' }]"
    >
      <a-input v-model:value="formState.lastname" />
    </a-form-item>
    <a-form-item
      label="Phone Number"
      name="phoneNumber"
      :rules="[{ required: true, message: 'Please input your phone number' }]"
    >
      <a-input v-model:value="formState.phoneNumber" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>
