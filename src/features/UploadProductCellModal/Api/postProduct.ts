import axios from '@/provider/axiosInstanse.ts'
import { PostProduct } from '@/features/UploadProductCellModal/Types/PostProduct.ts'

const { axiosInstance } = axios

export const postProduct = async (id: string, simpleName: string, product: PostProduct) => {
  return await axiosInstance.post(`/product/hand/${id}/${simpleName}`, { product })
}
