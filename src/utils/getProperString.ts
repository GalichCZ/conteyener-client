import { Dates } from '@/Types'
import { formatDate } from '@/utils/convertDate.ts'

export const getProperString = (
  value: string | Date | number | boolean,
  tooltipId: string
): string => {
  if (value === 0) return '0'
  if (!value) return '-'
  const isDate = Dates[tooltipId.toLowerCase() as keyof typeof Dates]
  const isBoolean = typeof value === 'boolean'
  const isBooleanString = value === 'true' || value === 'false'
  const isNumber = typeof value === 'number'

  if (isDate) return formatDate(value as string)
  if (isBoolean) return value ? '+' : '-'
  if (isBooleanString) return value === 'true' ? '+' : '-'
  if (isNumber) return value.toString()
  return value.toString()
}
