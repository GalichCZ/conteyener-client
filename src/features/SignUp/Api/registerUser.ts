import axios from '@/provider/axiosInstanse'
import { UserRegister } from '../Types/UserRegister.ts'

const { axiosInstance } = axios

export const registerUser = async (user: UserRegister) => {
  return await axiosInstance.post('/auth/signup', user)
}
