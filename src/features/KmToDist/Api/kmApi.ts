import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const kmApi = async (km_to_dist: number | null, bidId: string) => {
  await axiosInstance.patch('/item/distance', { km_to_dist, _id: bidId })
}
