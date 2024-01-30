import axios from '@/provider/axiosInstanse.ts'

const { cacheAxios } = axios

export const getStores = async () => {
  return await cacheAxios.get(`/stores?timeStamp=${new Date().getTime()}`)
}
