import { useQuery } from '@tanstack/vue-query'
import type { ApiSchemas } from '@/types'
import { mutationFetcher } from '@/utils'

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
