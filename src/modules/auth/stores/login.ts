import { message } from 'ant-design-vue'
import { defineStore } from 'pinia'
import { login } from '../api'
import { LoginResponse, LoginPayload } from '../types/login'

export const useLoginStore = defineStore('login', {
  state: () => ({
    loading: false,
    error: false,
    loginData: {},
  }),
  actions: {
    login (payload: LoginPayload) {
      this.loading = true
      login(payload)
        .then((response: LoginResponse): void => {
          this.loginData = response
          this.error = false
          this.loading = false
        })
        .catch((): void => {
          this.error = true
          message.error("Invalid login!")
          this.loading = false
        })
    },
  }
})
