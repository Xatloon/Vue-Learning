import { reqGet, reqPost } from '@/utils'

function getApiUrl(url: string): string {
  const prefix = import.meta.env.VITE_API_PREFIX
  return `${prefix}${url}`
}

export async function queryFetcher<T, U extends object | undefined>([url, params]: readonly [url: string, params: U]): Promise<T> {
  return await reqGet<T, U>(getApiUrl(url), params)
}

export async function mutationFetcher<T, U extends object | undefined>([url, params]: readonly [url: string, params: U]): Promise<T> {
  return await reqPost<T, U>(getApiUrl(url), params)
}
