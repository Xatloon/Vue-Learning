import { format } from 'date-fns'

export function formatDate(date: string | Date | undefined) {
  if (!date)
    return '-'
  const result = format(new Date(date), 'yyyy-MM-dd HH:mm:ss')
  if (result === '1970-01-01 07:30:00')
    return '-' // dummy date
  return result
}
