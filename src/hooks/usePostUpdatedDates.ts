import { useState } from 'react'
import { Error } from '@/Types'
import { AxiosError } from 'axios'
import { postUpdatedDates } from '@/GlobalApi/postUpdatedDates.ts'

export const usePostUpdatedDates = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const updateDates = async (toUpdate: []) => {
    setLoading(true)

    try {
      await postUpdatedDates(toUpdate)
      setLoading(false)
      setSuccess(true)
    } catch (e) {
      const err = e as AxiosError
      setLoading(false)
      setError({ message: err.message, status: err.request.status })
    }
  }

  return { loading, success, error, setError, updateDates }
}
