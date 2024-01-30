import axios from '@/provider/axiosInstanse.ts'
import { StoreFormType } from '@/Types'

const { axiosInstance } = axios

export const postStore = async (data: StoreFormType) => {
  return await axiosInstance.post('/store', data)
}
