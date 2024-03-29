import { DocsFormType, Error } from '@/Types'
import { useCallback, useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { updateDocs } from '@/features/UpdateDocsModal/Api/updateDocs.ts'

export const useUpdateDocs = (data: DocsFormType | null, bidId: string, confirmed: boolean) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const callUpdateDocs = useCallback(
    async (_data: DocsFormType) => {
      setLoading(true)
      setSuccess(false)
      try {
        await updateDocs(_data, bidId)
        setSuccess(true)
        setLoading(false)
      } catch (error) {
        const err = error as AxiosError
        setError({ message: err.message, status: err.request.status })
        setLoading(false)
      }
    },
    [bidId]
  )

  useEffect(() => {
    if (!data || !confirmed) return
    callUpdateDocs(data)
  }, [callUpdateDocs, confirmed, data])

  return { success, error, loading, setError }
}
