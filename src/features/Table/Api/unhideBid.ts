import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const unhideBid = async (bidId: string) => {
  return await axiosInstance.patch(`/item/unhide`, { bidId })
}
