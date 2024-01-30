import axios from '@/provider/axiosInstanse.ts'
import { handleError } from '@/utils/handleError.ts'
import { AxiosError } from 'axios'
import { Error } from '@/Types'

const { axiosInstance } = axios

export const createExcelFile = async () => {
  return await axiosInstance.get('/file/create')
}

export const downloadFile = async (fileName: string) => {
  try {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API_URL}/file/download/${fileName}`,
      {
        responseType: 'blob',
      }
    )
    const blob = response.data
    const url = window.URL.createObjectURL(new Blob([blob]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  } catch (error) {
    const err = error as AxiosError
    const handlingError: Error = { message: err.message, status: err.status || 500 }
    handleError(handlingError)
  }
}
