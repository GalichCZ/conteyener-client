import { useEffect, useState } from 'react'
import { DeliveryChannel, Error } from '@/Types'
import { AxiosError } from 'axios'
import { updateDeliveryChannel } from '@/features/DeliveryChannel/Api/updateDeliveryChannel.ts'

export const useUpdateDeliveryChannel = (deliveryChannel: DeliveryChannel | null) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!deliveryChannel) return
    const callUpdateDeliveryChannel = async () => {
      setIsLoading(true)
      try {
        await updateDeliveryChannel(deliveryChannel)
        setIsLoading(false)
        setIsSuccess(true)
      } catch (error) {
        const err = error as AxiosError
        setError({ message: err.message, status: err.request.status })
        setIsLoading(false)
      }
    }
    callUpdateDeliveryChannel()
  }, [deliveryChannel])

  return { isLoading, error, setError, isSuccess }
}
