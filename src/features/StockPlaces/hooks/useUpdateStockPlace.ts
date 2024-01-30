import { Error, StockPlace } from '@/Types'
import { useEffect, useState } from 'react'
import { updateStockPlace } from '@/features/StockPlaces/Api/updateStockPlace.ts'
import { AxiosError } from 'axios'

export const useUpdateStockPlace = (stockPlace: StockPlace | null) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!stockPlace) return
    const callUpdateStockPlace = async () => {
      setIsLoading(true)
      try {
        await updateStockPlace(stockPlace)
        setSuccess(true)
        setIsLoading(false)
      } catch (error) {
        const err = error as AxiosError
        setError({ message: err.message, status: err.request.status })
        setIsLoading(false)
      }
    }
    callUpdateStockPlace()
  }, [stockPlace])

  return { isLoading, error, success, setError }
}
