import { StockPlace } from '@/Types'
import { getStockPlaces } from '@/GlobalApi/getStockPlaces.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetStockPlaces = () => {
  const {
    data: stockPlaces,
    error,
    setError,
    isLoading,
  } = useGetDataFromServer<StockPlace[]>({ callGetData: getStockPlaces })

  return { stockPlaces, isLoading, error, setError }
}
