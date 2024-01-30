import { DateCalculateFormType } from '@/Types'
import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const calculateDates = async (data: DateCalculateFormType) => {
  return await axiosInstance.patch('/item/calculate', data)
}
