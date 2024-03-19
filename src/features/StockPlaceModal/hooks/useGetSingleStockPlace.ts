import { StockPlace } from '@/Types'
import { getSingleStockPlace } from '@/features/StockPlaceModal/Api/getSingleStockPlace.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetSingleStockPlace = (id: string) => {
  const {
    data: stockPlace,
    isLoading,
    error,
    setError,
  } = useGetDataFromServer<StockPlace>({ callGetData: () => getSingleStockPlace(id) })

  return { stock: stockPlace, isLoading, error, setError }
}
