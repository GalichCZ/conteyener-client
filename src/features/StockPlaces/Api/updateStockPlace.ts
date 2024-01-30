import axios from '@/provider/axiosInstanse.ts'
import { StockPlace } from '@/Types'

const { axiosInstance } = axios

export const updateStockPlace = async (data: StockPlace) => {
  return await axiosInstance.patch(`/stock`, data)
}
