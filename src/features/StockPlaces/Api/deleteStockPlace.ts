import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const deleteStockPlace = async (id: string) => {
  return await axiosInstance.delete(`/stock/${id}`)
}
