import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import type { ApiSchemas, paths } from '@/types'
import { queryFetcher } from '@/utils'

type GetProjectsListParams = paths['/api/terms/listTerm']['get']['parameters']['query']
type GetProjectListResult = ApiSchemas['ListTermResult']

export function useProjectsList(params: Ref<GetProjectsListParams> | GetProjectsListParams) {
  const { data, isLoading } = useQuery({
    queryKey: ['/terms/listTerm', params] as const,
    queryFn: ({ queryKey }) => queryFetcher<GetProjectListResult, GetProjectsListParams>(queryKey),
    placeholderData: keepPreviousData,
  })
  return {
    data,
    isLoading,
  }
}

type GetColumnsListParams = paths['/api/configs/getColumns']['get']['parameters']['query']
type GetColumnsListResult = ApiSchemas['GetColumnsResult']

export function useColumnsList(params: Ref<GetColumnsListParams> | GetColumnsListParams = undefined) {
  const { data, isPending } = useQuery({
    queryKey: ['/configs/getColumns', params] as const,
    queryFn: ({ queryKey }) => queryFetcher<GetColumnsListResult, GetColumnsListParams>(queryKey),
    placeholderData: keepPreviousData,
  })
  return {
    data,
    isPending,
  }
}
