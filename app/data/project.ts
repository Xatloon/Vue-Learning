import { useQuery } from '@tanstack/vue-query'
import type { ApiSchemas, SaveProjectParams } from '@/types'
import { mutationFetcher } from '@/utils'

type SaveProjectResult = ApiSchemas['SaveTermResult']

export function useProjectSave(params: SaveProjectParams) {
  const { data, isPending } = useQuery({
    queryKey: ['/terms/saveTerm', params] as const,
    queryFn: async ({ queryKey }) => await mutationFetcher<SaveProjectResult, SaveProjectParams>(queryKey),
  })
  return {
    data,
    isPending,
  }
}
