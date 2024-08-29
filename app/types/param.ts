import type { ApiSchemas, paths } from '@/types'

export type SaveProjectParams = ApiSchemas['SaveTermDto']
export type GetProjectsListParams = paths['/api/terms/listTerm']['get']['parameters']['query']
export type GetColumnsListParams = paths['/api/configs/getColumns']['get']['parameters']['query']
