import { useQuery } from '@tanstack/vue-query'
import type { ApiSchemas, paths } from '@/types'
import { mutationFetcher, queryFetcher } from '@/utils'

type GetProjectsListParams = paths['/api/terms/listTerm']['get']['parameters']['query']
type GetProjectListResult = ApiSchemas['ListTermResult']

export function useProjectsList(params: GetProjectsListParams) {
  const { data, isPending } = useQuery({
    queryKey: ['/terms/listTerm', params] as const,
    queryFn: ({ queryKey }) => queryFetcher<GetProjectListResult, GetProjectsListParams>(queryKey),
  })
  return {
    data,
    isPending,
  }
}

type SaveProjectParams = ApiSchemas['SaveTermDto']
type SaveProjectResult = ApiSchemas['SaveTermResult']

export function useProjectSave(params: SaveProjectParams) {
  const { data, isPending } = useQuery({
    queryKey: ['/terms/saveTerm', params] as const,
    queryFn: ({ queryKey }) => mutationFetcher<SaveProjectResult, SaveProjectParams>(queryKey),
  })
  return {
    data,
    isPending,
  }
}
