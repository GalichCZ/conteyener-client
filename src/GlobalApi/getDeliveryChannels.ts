import axios from '@/provider/axiosInstanse.ts'

const { cacheAxios } = axios

export const getDeliveryChannels = async () => {
  return await cacheAxios.get(`/channel?timeStamp=${new Date().getTime()}`)
}
