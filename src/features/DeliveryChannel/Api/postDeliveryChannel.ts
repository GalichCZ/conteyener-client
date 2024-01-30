import axios from '@/provider/axiosInstanse.ts'
import { DeliveryChannelFormType } from '@/Types'

const { axiosInstance } = axios

export const postDeliveryChannel = async (data: DeliveryChannelFormType) => {
  return await axiosInstance.post('/channel', data)
}
