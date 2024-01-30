import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const hideBid = async (bidId: string) => {
  return await axiosInstance.patch('/item/hide', { _id: bidId })
}
