import { useState } from 'react'
import { Error } from '@/Types'
import { AxiosError } from 'axios'
import { unhideBid } from '@/features/Table/Api/unhideBid.ts'
import { useDispatch } from 'react-redux'
import { setReDraw } from '@/store'

export const useUnhideBid = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch()

  const callUnhideBid = async (bidId: string) => {
    setLoading(true)
    setSuccess(false)
    try {
      await unhideBid(bidId)
      setSuccess(true)
      setLoading(false)
      dispatch(setReDraw())
    } catch (e) {
      const err = e as AxiosError
      setError({ message: err.message, status: err.request.status })
      setLoading(false)
    }
  }

  return { loading, error, setError, success, callUnhideBid }
}
