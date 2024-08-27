import type { components } from '@/types'

type ResponseReult = ApiSchemas['ResultData']

export type ApiSchemas = components['schemas']
export interface ResponseData<T> extends ResponseReult {
  data: T
}
