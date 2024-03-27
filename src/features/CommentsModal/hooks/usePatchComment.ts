import { Error } from '@/Types'
import { useState } from 'react'
import { updateComment, UpdateComment } from '@/features/CommentsModal/Api/updateComment.ts'
import { AxiosError } from 'axios'
import { setReDraw } from '@/store/slices/reDrawSlice.ts'
import { useAppDispatch } from '@/hooks/hooksRedux.ts'

export const usePatchComment = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const dispatch = useAppDispatch()

  const callPatchComment = async (comment: UpdateComment) => {
    setLoading(true)
    setSuccess(false)
    try {
      await updateComment(comment)
      setLoading(false)
      setSuccess(true)
      dispatch(setReDraw())
    } catch (e) {
      const err = e as AxiosError
      setError({ message: err.message, status: err.request.status })
      setLoading(false)
    }
  }

  return { loading, success, setError, error, callPatchComment }
}
