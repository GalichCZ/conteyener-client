import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const getComment = async (bidId: string) => {
  return await axiosInstance.get(`comment/${bidId}?timeStamp=${new Date().getTime()}`)
}
