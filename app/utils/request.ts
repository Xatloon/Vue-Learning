import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { MessageText } from '@/constants'
import type { ResponseData } from '@/types'

const { VITE_API_HOST } = import.meta.env

export function apiUrl(url: string): string {
  return VITE_API_HOST ? `${VITE_API_HOST}${url}` : url
}

const RestRequest: AxiosInstance = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  withCredentials: true,
})

RestRequest.interceptors.response.use(
  async (response: AxiosResponse<ResponseData<any>>) => {
    const { data } = response
    const { code, message: responseMessage } = data
    if (code === 200) {
      return response
    }
    if (responseMessage !== undefined) {
      ElMessage.error({
        message: responseMessage,
      })
    }
    return await Promise.reject(response.data)
  },
  async (error: AxiosError<ResponseData<any>>) => {
    const { response } = error
    if (response) {
      if (response.status === 401) {
        const closeHandler = () => {
          localStorage.clear()
          const baseUrl = window.location.origin
          const baseProjectUrl = import.meta.env.BASE_URL
          const projectUrl = baseProjectUrl.endsWith('/') ? baseProjectUrl : `${baseProjectUrl}/`
          window.location.href = `${baseUrl}${projectUrl}login`
        }
        ElMessage({
          type: 'info',
          message: MessageText.AuthExpired,
          duration: 2,
          onClose: closeHandler,
        })
      }
      if (response.data.message !== undefined) {
        ElMessage({
          type: 'error',
          message: response.data.message,
        })
      }
      return await Promise.reject(response.data)
    }
  },
)

RestRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')?.replace(/^"|"$/g, '')
    if (token !== undefined) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  },
)

export async function reqGet<T = unknown, U = unknown>(
  url: string,
  params?: U,
): Promise<T> {
  const res = await RestRequest.get<ResponseData<T>>(apiUrl(url), { params })
  return res.data.data
}

export async function reqPost<T = unknown, U = unknown>(
  url: string,
  params?: U,
): Promise<T> {
  const res = await RestRequest.post<ResponseData<T>>(apiUrl(url), { params })
  return res.data.data
}
