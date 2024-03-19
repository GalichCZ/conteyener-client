import { Store } from '@/Types'
import { getSingleStore } from '@/features/StoreInfoModal/Api/getSingleStore.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetSingleStore = (id: string) => {
  const {
    data: store,
    error,
    setError,
    isLoading,
  } = useGetDataFromServer<Store>({ callGetData: () => getSingleStore(id) })

  return { store, isLoading, error, setError }
}
