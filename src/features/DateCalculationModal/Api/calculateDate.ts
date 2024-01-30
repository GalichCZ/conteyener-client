import axios from '@/provider/axiosInstanse.ts'
import { DateCalculateFormType } from '@/Types'

const { axiosInstance } = axios

export const calculateDate = async (data: DateCalculateFormType) => {
  return await axiosInstance.patch('/item/date', data)
}
