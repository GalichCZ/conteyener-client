import { Comment } from '@/Types'
import { getComment } from '@/features/CommentsModal/Api/getComments.ts'
import { useGetDataFromServer } from '@/hooks/useGetDataFromServer.ts'

export const useGetComments = (bidId: string) => {
  const {
    isLoading,
    error,
    setError,
    data: comments,
  } = useGetDataFromServer<Comment[]>({ callGetData: () => getComment(bidId) })

  return { isLoading, comments, error, setError }
}
