import axios from '@/provider/axiosInstanse.ts'
import { FormBidUpdateValues } from '@/features/UpdateBidModal/Type/FormBidUpdateValues.ts'

const { axiosInstance } = axios

export const updateBid = async (bid: FormBidUpdateValues) => {
  return await axiosInstance.patch(`/bid`, JSON.stringify(bid))
}
