import axios from '@/provider/axiosInstanse.ts'
import { SearchField } from '@/store/slices/searchSlice.ts'
import { FiltersMap } from '@/store/slices/filtersMapSlice.ts'

const { axiosInstance } = axios

export const getBids = async (
  page: number,
  hidden: boolean,
  searchValue: string,
  searchField: SearchField,
  filtersMap: FiltersMap[]
) => {
  return await axiosInstance.post(
    `item/${page}?timeStamp=${new Date().getTime()}`,
    JSON.stringify({
      search_query: searchValue,
      search_filter: searchField,
      hidden,
      filtersMap,
    })
  )
}
