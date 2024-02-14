import { useDispatch } from 'react-redux'
import { FilterName, setFiltersMap } from '@/store/slices/filtersMapSlice.ts'
import { useEffect, useState } from 'react'

export const useSearchThroughArray = (
  array: string[] | null,
  searchValue: string,
  key: FilterName
) => {
  const dispatch = useDispatch()
  const [filteredList, setFilteredList] = useState<string[]>([])

  useEffect(() => {
    if (!array) return
    if (key === '') return
    setFilteredList(array)
    if (searchValue === '') return
    const filtered = array
      ?.filter((item) => item.toString().toLowerCase().includes(searchValue.toLowerCase()))
      .map((item) => item.toString())
    setFilteredList(filtered)

    dispatch(setFiltersMap({ [key]: filtered }))
  }, [array, searchValue, key])

  return { filtered: filteredList }
}
