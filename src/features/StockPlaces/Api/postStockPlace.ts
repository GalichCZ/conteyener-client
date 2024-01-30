import axios from '@/provider/axiosInstanse.ts'
import { StockPlace } from '@/Types'

const { axiosInstance } = axios

export const postStockPlace = async (data: StockPlace) => {
  return await axiosInstance.post('/stock', data)
}
