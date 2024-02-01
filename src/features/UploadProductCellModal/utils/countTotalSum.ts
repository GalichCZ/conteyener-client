import { formatNumber } from '@/utils/formatNumber.ts'

export const countTotalSum = (nums: number[]) => {
  const totalSum: number = nums.reduce((acc, num) => acc + num, 0)

  return formatNumber(totalSum, 'en-US')
}
