import { Error, Store } from '@/Types'
import { useCallback, useEffect, useState } from 'react'
import { getSingleStore } from '@/features/StoreInfoModal/Api/getSingleStore.ts'
import { AxiosError } from 'axios'

export const useGetSingleStore = (id: string) => {
  const [store, setStore] = useState<Store | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const callGetSingleStore = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await getSingleStore(id)
      setStore(data)
      setLoading(false)
    } catch (error) {
      const err = error as AxiosError
      setError({
        message: err.request?.statusText,
        status: err.request.status,
      })
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    callGetSingleStore()
  }, [callGetSingleStore])

  return { store, loading, error, setError }
}
