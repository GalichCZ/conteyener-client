import { useCallback, useEffect, useState } from 'react'
import { Error, FollowBid } from '@/Types'
import { AxiosError } from 'axios'
import { getBids } from '@/features/Table/Api/getBids.ts'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { useDispatch } from 'react-redux'
import { setFilterApplied } from '@/store'

export const useGetBids = (page: number, hidden: boolean) => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [bids, setBids] = useState<FollowBid[]>()
  const [pages, setPages] = useState<number>(0)
  const [error, setError] = useState<Error | null>(null)

  const { reDraw, filterApplied } = useAppSelector(({ reDraw }) => reDraw)
  const { searchValue, searchField } = useAppSelector(({ search }) => search)
  const filtersMap = useAppSelector(({ filtersMap }) => filtersMap.filtersMap)

  const callGetBids = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await getBids(page, hidden, searchValue || 'null', searchField, [])
      setBids(data.items)
      setPages(data.totalPages)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      const err = e as AxiosError
      setError({ message: err.message, status: err.request.status })
    }
  }, [hidden, page, searchField, searchValue])

  const getBidsWithFilter = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await getBids(page, hidden, 'null', 'other', filtersMap)
      setBids(data.items)
      setPages(data.totalPages)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      const err = e as AxiosError
      setError({ message: err.message, status: err.request.status })
    }
    dispatch(setFilterApplied(false))
  }, [dispatch, page, hidden, filtersMap])

  useEffect(() => {
    callGetBids()
  }, [callGetBids, page, reDraw, searchValue])

  useEffect(() => {
    if (!filterApplied) return

    getBidsWithFilter()
  }, [filterApplied, getBidsWithFilter])

  return { loading, error, setError, bids, pages }
}
