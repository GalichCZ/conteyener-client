import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const getSingleStockPlace = async (id: string) => {
  return await axiosInstance.get(`/stock/${id}`)
}
