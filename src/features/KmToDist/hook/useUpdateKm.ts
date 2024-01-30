import { useState } from 'react'
import { Error } from '@/Types'
import { AxiosError } from 'axios'
import { kmApi } from '@/features/KmToDist/Api/kmApi.ts'

export const useUpdateKm = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const changeKm = async (km_to_dist: number | null, bidId: string) => {
    setLoading(true)
    try {
      await kmApi(km_to_dist, bidId)
      setSuccess(true)
      setLoading(false)
    } catch (e) {
      const err = e as AxiosError
      setError({ message: err.message, status: err.request.status })
      setLoading(false)
    }
  }

  return { loading, success, error, setError, changeKm }
}
