import { useCallback, useEffect, useState } from 'react'
import { Comment, Error } from '@/Types'
import { AxiosError } from 'axios'
import { getComment } from '@/features/CommentsModal/Api/getComments.ts'
import { useAppSelector } from '@/hooks/hooksRedux.ts'

export const useGetComments = (bidId: string | null) => {
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState<Comment[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const reDraw = useAppSelector((state) => state.reDraw.reDraw)

  const callGetComments = useCallback(async () => {
    if (!bidId) return
    console.log('fetched')

    setLoading(true)
    try {
      const { data } = await getComment(bidId)
      console.log(data)
      setComments(data)
      setLoading(false)
    } catch (e) {
      const err = e as AxiosError
      setError({ message: err.message, status: err.request.status })
      setLoading(false)
    }
  }, [bidId])

  useEffect(() => {
    callGetComments()
  }, [callGetComments, reDraw])

  return { loading, comments, error, setError }
}
