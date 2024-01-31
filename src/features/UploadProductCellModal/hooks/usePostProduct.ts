import { PostProduct } from '@/features/UploadProductCellModal/Types/PostProduct.ts'
import { useState } from 'react'
import { Error } from '@/Types'
import { AxiosError } from 'axios'
import { postProduct } from '@/features/UploadProductCellModal/Api/postProduct.ts'

export const usePostProduct = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState(false)

  const callPostProduct = async (id: string, simpleName: string, product: PostProduct) => {
    setLoading(true)
    try {
      await postProduct(id, simpleName, product)
      setSuccess(true)
      setLoading(false)
    } catch (e) {
      const err = e as AxiosError
      setError({
        message: err.message,
        status: err.request.status,
      })
      setLoading(false)
    }
  }

  return { loading, error, success, setError, setSuccess, callPostProduct }
}
