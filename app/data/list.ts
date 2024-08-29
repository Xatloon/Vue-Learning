import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import type { ApiSchemas, GetColumnsListParams, GetProjectsListParams } from '@/types'
import { queryFetcher } from '@/utils'

type GetProjectListResult = ApiSchemas['ListTermResult']

export function useProjectsList(params: Ref<GetProjectsListParams> | GetProjectsListParams) {
  const { data, isPending } = useQuery({
    queryKey: ['/terms/listTerm', params] as const,
    queryFn: async ({ queryKey }) => await queryFetcher<GetProjectListResult, GetProjectsListParams>(queryKey),
    placeholderData: keepPreviousData,
  })
  return {
    data,
    isPending,
  }
}

type GetColumnsListResult = ApiSchemas['GetColumnsResult']

export function useColumnsList(params: Ref<GetColumnsListParams> | GetColumnsListParams = undefined) {
  const { data, isPending } = useQuery({
    queryKey: ['/configs/getColumns', params] as const,
    queryFn: async ({ queryKey }) => await queryFetcher<GetColumnsListResult, GetColumnsListParams>(queryKey),
    placeholderData: keepPreviousData,
  })
  return {
    data,
    isPending,
  }
}
