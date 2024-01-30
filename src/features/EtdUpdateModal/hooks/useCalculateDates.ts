import { DateCalculateFormType, Error } from '@/Types'
import { useCallback, useEffect, useState } from 'react'
import { calculateDates } from '@/features/EtdUpdateModal/Api/calculateDates.ts'
import { AxiosError } from 'axios'

export const useCalculateDates = (data: DateCalculateFormType | null) => {
  const [success, setSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const callCalculateDates = useCallback(async (_data: DateCalculateFormType) => {
    setIsLoading(true)
    try {
      await calculateDates(_data)
      setSuccess(true)
      setIsLoading(false)
    } catch (error) {
      const err = error as AxiosError
      setError({ message: err.message, status: err.request.status })
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!data) return

    callCalculateDates(data)
  }, [callCalculateDates, data])

  return { success, isLoading, error, setError }
}
