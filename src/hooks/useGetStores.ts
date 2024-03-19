import { Store } from '@/Types'
import { getStores } from '@/GlobalApi/getStores.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetStores = () => {
  const {
    data: stores,
    isLoading,
    error,
    setError,
  } = useGetDataFromServer<Store[]>({ callGetData: getStores })

  return { stores, isLoading, error, setError }
}
