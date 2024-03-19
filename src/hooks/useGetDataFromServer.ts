import { Error } from '@/Types'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { AxiosError, AxiosPromise } from 'axios'

interface ReturnType<D> {
  data: D | null
  isLoading: boolean
  error: Error | null
  setError: Dispatch<SetStateAction<Error | null>>
}

interface GetDataArgs<D> {
  callGetData: (...args: unknown[]) => AxiosPromise<D>
}

export const useGetDataFromServer = <D>({ callGetData }: GetDataArgs<D>): ReturnType<D> => {
  const [data, setData] = useState<D | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const reDraw = useAppSelector((state) => state.reDraw.reDraw)

  const callGetDataHandle = async () => {
    setIsLoading(true)
    try {
      const { data } = await callGetData()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      const err = error as AxiosError
      setError({ message: err.message, status: err.request.status })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    callGetDataHandle()
  }, [reDraw])

  return {
    data,
    isLoading,
    error,
    setError,
  }
}
