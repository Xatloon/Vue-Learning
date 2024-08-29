<script setup lang="ts">
import { useColumnsList, useProjectsList } from '@/data'
import { ButtonText, TagText } from '@/constants'
import { formatDate } from '@/utils'
import type { GetProjectsListParams } from '@/types'

const params = reactive<GetProjectsListParams>({
  page: 1,
  size: 10,
  columnId: undefined,
  status: undefined,
  name: undefined,
})
const { data, isPending } = useProjectsList(params)
const { data: columnsData, isPending: isColumnPending } = useColumnsList()
const statusOptions = [{
  label: TagText.Active,
  value: 'active',
}, {
  label: TagText.Inactive,
  value: 'ready',
}]

const filters = reactive({
  columnId: undefined,
  status: undefined,
  name: undefined,
})

function onChangeHandler() {
  params.columnId = filters.columnId
  params.status = filters.status
  params.name = filters.name
}

function onResetHandler() {
  filters.columnId = undefined
  filters.status = undefined
  filters.name = undefined
  params.columnId = undefined
  params.status = undefined
  params.name = undefined
}
</script>

<template>
  <main class="flex flex-col gap-6 p-4">
    <ElCard
      body-class="flex gap-4 flex-col"
    >
      <div class="flex gap-2">
        <ElButton>{{ ButtonText.AddProject }}</ElButton>
        <ElButton>{{ ButtonText.UpdateMultiStatusActive }}</ElButton>
        <ElButton>{{ ButtonText.UpdateMultiStatusInactive }}</ElButton>
        <ElButton>{{ ButtonText.DeleteMultiProjects }}</ElButton>
      </div>
      <div class="flex gap-2">
        <ElForm inline :model="filters">
          <ElFormItem label="所属栏目">
            <ElSelect v-model="filters.columnId" :loading="isColumnPending" placeholder="所属栏目" style="width: 200px;">
              <ElOption
                v-for="column in columnsData?.columns"
                :key="column.id"
                :label="column.name"
                :value="column.id"
              />
            </ElSelect>
          </ElFormItem>
          <ElFormItem label="状态">
            <ElSelect v-model="filters.status" placeholder="选择状态" style="width: 200px;">
              <ElOption
                v-for="option in statusOptions"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </ElSelect>
          </ElFormItem>
          <ElFormItem label="项目名称">
            <ElInput v-model="filters.name" />
          </ElFormItem>
          <ElFormItem>
            <ElButton type="primary" @click="onChangeHandler">
              {{ ButtonText.Find }}
            </ElButton>
            <ElButton @click="onResetHandler">
              {{ ButtonText.Reset }}
            </ElButton>
          </ElFormItem>
        </ElForm>
      </div>
    </ElCard>
    <ElCard
      body-class="flex gap-4 flex-col"
    >
      <ElTable
        v-loading="isPending"
        :data="data?.terms"
        border
        show-overflow-tooltip
      >
        <ElTableColumn type="selection" />
        <ElTableColumn prop="name" label="名称" />
        <ElTableColumn prop="columnName" label="所属栏目" />
        <ElTableColumn prop="clicks" label="点击量" />
        <ElTableColumn label="状态">
          <template #default="{ row }">
            <ElTag
              :type="row.status === 'active' ? 'success' : 'danger'"
            >
              {{ row.status === 'active' ? TagText.Active : TagText.Inactive }}
            </ElTag>
          </template>
        </ElTableColumn>
        <ElTableColumn label="更新时间">
          <template #default="{ row }">
            {{ formatDate(row.updatedAt) }}
          </template>
        </ElTableColumn>
      </ElTable>
      <ElPagination
        v-model:page-size="params.size"
        v-model:current-page="params.page"
        :total="data?.count ?? 0"
      />
    </ElCard>
  </main>
</template>
