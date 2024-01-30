import axios from '@/provider/axiosInstanse.ts'
import { Declaration } from '@/Types'

const { axiosInstance } = axios

export const postStatus = async (declarationStatus: Declaration | null) => {
  return await axiosInstance.post('/declaration', declarationStatus)
}
