import axios from '@/provider/axiosInstanse'

const { axiosInstance } = axios
export const getUsers = async () => {
  console.log('getUsers')
  return await axiosInstance.get(`/users?timeStamp=${new Date().getTime()}`)
}
