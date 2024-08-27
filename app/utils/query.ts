import { reqGet, reqPost } from '@/utils'

function getApiUrl(url: string): string {
  const apiUrl = import.meta.env.VITE_API_URL
  const prefix = import.meta.env.VITE_API_PREFIX
  return `${apiUrl}${prefix}${url}`
}

export async function queryFetcher<T, U extends object>([url, params]: readonly [url: string, params: U]): Promise<T> {
  return await reqGet<T, U>(getApiUrl(url), params)
}

export async function mutationFetcher<T, U extends object>([url, params]: readonly [url: string, params: U]): Promise<T> {
  return await reqPost<T, U>(getApiUrl(url), params)
}
