import axios from 'axios';
import * as config from '../config'

const token: string | null = localStorage.getItem('token')

const invApi = axios.create({
	baseURL: config.baseURL || 'http://localhost:4000',
});

const refreshToken = async (): Promise<any> => {
	if (!localStorage.getItem('refreshToken')) return Promise.reject('Cannot refresh the token')
	const baseURL: string = config.baseURL || 'http://localhost:4000'
	const refreshRequest = await axios.get(`${baseURL}/api/v1/auth/refresh`, {
		headers: {
			Authorization: `Bearer ${localStorage.refreshToken}`,
		},
	})
	const accessToken: string = refreshRequest.data.tokens.access_token as string
	localStorage.setItem('token', accessToken)
	window.location.reload()
}

const authInterceptors = (): void => {
	invApi.interceptors.response.use((res) => res, async (err) => {
		if (err.response.status === 401 && err.response.statusText === "Unauthorized") {
			return await refreshToken()
		} else {
			return Promise.reject(err)
		}
	})
}

if (token) {
	invApi.defaults.headers.common.Authorization = `Bearer ${token}`
	authInterceptors()
}

export { invApi, authInterceptors }