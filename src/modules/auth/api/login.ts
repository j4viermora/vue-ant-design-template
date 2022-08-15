import { axios } from '../config/axios'
import { LoginPayload, LoginResponse } from '../types/login'

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  return new Promise(async (
    resolve: (value: LoginResponse) => void,
    reject: (reason?: any) => void
  ): Promise<void> => {
    try {
      const req = await axios.post('/api/v1/auth/login', payload)
      resolve(req.data as LoginResponse)
    } catch (error) {
      reject(error)
    }
  })
}
