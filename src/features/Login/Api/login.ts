import axios from '@/provider/axiosInstanse.ts'
import { Credentials } from '../types/Credentials.ts'

const { axiosInstance } = axios

export const login = async (credential: Credentials) => {
  return await axiosInstance.post('/auth/login', credential)
}
