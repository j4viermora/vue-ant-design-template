import { message } from 'ant-design-vue'
import { useLoginStore } from '../stores/login'
import { LoginPayload, LoginResponse } from '../types/login'
import { invApi, authInterceptors } from '../../../api/axios'
import { useRouter } from 'vue-router'

export const useLogin = () => {
  const store = useLoginStore()
  const router = useRouter()

  const startLogin = (payload: LoginPayload): void => {
    store.login(payload)
  }

  store.$subscribe((mutation, state) => {
    if (
      mutation.type === 'direct' &&
      mutation.events.type === 'set' &&
      mutation.events.key === 'loading'
    ) {
      if (state.loading === false && state.error === false) {
        const { loginData } = state as unknown as { loginData: LoginResponse }
        localStorage.setItem('userData', JSON.stringify({ ...loginData, tokens: undefined }))
        localStorage.setItem('token', loginData.tokens.access_token)
        localStorage.setItem('refreshToken', loginData.tokens.refresh_token)
        invApi.defaults.headers.common['Authorization'] = `Bearer ${loginData.tokens.access_token}`
        authInterceptors()
        message.success('Logged in successfully')
        router.push('/app')
      }
    }
  })

  return { startLogin }
}
