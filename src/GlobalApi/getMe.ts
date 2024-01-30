import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const getMe = async () => {
  return await axiosInstance.get('/user')
}
