import { Error, StockPlace } from '@/Types'
import { useCallback, useEffect, useState } from 'react'
import { getStockPlaces } from '@/GlobalApi/getStockPlaces.ts'
import { AxiosError } from 'axios'
import { useAppSelector } from '@/hooks/hooksRedux.ts'

export const useGetStockPlaces = () => {
  const [stockPlaces, setStockPlaces] = useState<StockPlace[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>()
  const reDraw = useAppSelector((state) => state.reDraw.reDraw)

  const callGetStockPlaces = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await getStockPlaces()
      setStockPlaces(data)
      setIsLoading(false)
    } catch (error) {
      const err = error as AxiosError
      setError({ message: err.message, status: err.request.status })
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    callGetStockPlaces()
  }, [reDraw])

  return { stockPlaces, isLoading, error, setError }
}
