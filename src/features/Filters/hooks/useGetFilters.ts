import { getFilters } from '@/features/Filters/Api/getFilters.ts'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

type FilterObject = {
  values: string[]
}

export const useGetFilters = (filter_key: string, is_hidden: boolean) => {
  const { filtersMap } = useAppSelector((state) => state.filtersMap)
  const hasFilters = filtersMap.length !== 0
  const { data, isLoading, setError, error } = useGetDataFromServer<FilterObject>({
    callGetData: () => getFilters(filter_key, is_hidden, hasFilters),
  })

  const filters = data ? data.values : null

  if (filter_key === '' || filter_key === 'IS_DOCS') {
    return {
      filters: null,
      isLoading,
      error,
      setError,
    }
  }
  return { filters, isLoading, error, setError }
}
